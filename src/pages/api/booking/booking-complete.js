import axios from 'axios'

const CLOSE_API_KEY = process.env.CLOSE_API_KEY
const CLOSE_API_URL = 'https://api.close.com/api/v1'

const referrers = [
  'Bing',
  'Direct',
  'Facebook',
  'Google',
  'Instagram',
  'Other',
  'Yahoo',
  'Yelp',
  'Call-in'
]

const workflows = {
  semaglutide: 'seq_4mdb3tl0ZFPGjW61ClerAA',
  dysport: 'seq_6wKn7na4k08hb5oTGaPWbA',
  lip: 'seq_64mRBs0ioNR2zsEi92TxKJ',
  others: 'seq_3EIy1YBnwzSQKNrf7omcfS'
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  let event = req.body

  if (!event.email) {
    return res.status(400).json({ message: 'Invalid event data' })
  }

  const formattedEmail = event.email.toString().toLowerCase().replace(/\s/g, '').trim()

  const headers = {
    Authorization: `Basic ${Buffer.from(CLOSE_API_KEY).toString('base64')}`,
    'Content-Type': 'application/json'
  }

  let lead

  try {
    // Process referrers

    event.referrer = referrers.includes(event.referrer)
      ? event.referrer
      : 'Other'

    // Find lead in Close CRM

    try {
      const response = await fetch(`${CLOSE_API_URL}/data/search/`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "limit": null,
            "query": {
                "negate": false,
                "queries": [
                    {
                        "negate": false,
                        "object_type": "lead",
                        "type": "object_type"
                    },
                    {
                        "negate": false,
                        "queries": [
                            {
                                "negate": false,
                                "related_object_type": "contact",
                                "related_query": {
                                    "negate": false,
                                    "queries": [
                                        {
                                            "negate": false,
                                            "related_object_type": "contact_email",
                                            "related_query": {
                                                "negate": false,
                                                "queries": [
                                                    {
                                                        "condition": {
                                                            "mode": "full_words",
                                                            "type": "text",
                                                            "value": formattedEmail
                                                        },
                                                        "field": {
                                                            "field_name": "email",
                                                            "object_type": "contact_email",
                                                            "type": "regular_field"
                                                        },
                                                        "negate": false,
                                                        "type": "field_condition"
                                                    }
                                                ],
                                                "type": "and"
                                            },
                                            "this_object_type": "contact",
                                            "type": "has_related"
                                        }
                                    ],
                                    "type": "and"
                                },
                                "this_object_type": "lead",
                                "type": "has_related"
                            }
                        ],
                        "type": "and"
                    }
                ],
                "type": "and"
            },
            "results_limit": null,
            "sort": []
        })
      })

      if (!response.ok)
        throw new Error(
          'Failed to fetch lead',
          'Response: ',
          response,
          'Event: ',
          event
        )

      const data = await response.json()
      lead = data.data[0]

      const leadData = await fetch(`${CLOSE_API_URL}/lead/${lead.id}`, {
        method: 'GET',
        headers: headers
      })

      lead = await leadData.json()
    } catch (error) {
      console.error('Error finding lead:', error)
      return res.status(500).json({ error: 'Error finding lead in Close CRM' })
    }
  } catch (error) {
    console.error('Error finding lead:', error)
    res.status(500).json({ error: error.message })
  }

  // Send lead to callcenter Make endpoint

  try {
    const makeResponse = await fetch(
      'https://hook.us2.make.com/2qbxi9bgpg5onzwsahzpjxsed2ox91l7',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ID: lead.id,
          Email: formattedEmail,
          Status: 'Booked Appointment'
        })
      }
    )

    if (!makeResponse.ok) {
      console.error('Cannot send to call center:', makeResponse.statusText)
      return res.status(500).json({ error: 'Cannot send to call center' })
    }
  } catch (error) {
    console.error('Cannot send to call center:', error)
    return res.status(500).json({ error: 'Cannot send to call center' })
  }

  // Only continue if lead exists

  if (!lead) {
    return res.status(400).json({ message: 'Lead not found' })
  }

  // Update lead in Close CRM to Status: Appointment Scheduled

  try {
    const headersOut = {
      Authorization: `Basic ${Buffer.from(CLOSE_API_KEY).toString('base64')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }

    const response = await axios({
      method: 'put',
      url: `${CLOSE_API_URL}/lead/${lead.id}`,
      headers: headersOut,
      data: {
        status_id: 'stat_UEd5yTclwUA2nCoaOszpGjeKZHKK9ChYLwoWWS6h4OI'
      },
      validateStatus: function (status) {
        return status < 500
      }
    })
  } catch (error) {
    console.error('Error updating lead:', error)
    return res.status(500).json({ error: 'Error updating lead in Close CRM' })
  }

  // Only continue if lead.opportunities is not empty

  if (lead.opportunities.length === 0) {
    return res.status(400).json({ message: 'No opportunities found' })
  }

  // Update opportunity in Close CRM to Status: Booked Appointment

  try {
    const headersOut = {
      Authorization: `Basic ${Buffer.from(CLOSE_API_KEY).toString('base64')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }

    const response = await axios({
      method: 'put',
      url: `${CLOSE_API_URL}/opportunity/${lead.opportunities[0].id}`,
      headers: headersOut,
      data: {
        status_id: 'stat_A6Unc6FXro6DVUFF0H4PtMhpSqoRE9Omy9W4tlVRVgE'
      },
      validateStatus: function (status) {
        return status < 500
      }
    })
  } catch (error) {
    console.error('Error updating opportunity:', error)
    return res
      .status(500)
      .json({ error: 'Error updating opportunity in Close CRM' })
  }

  // Find workkflow subscription in Close CRM for the 'booked appointment' sequence and use the contact if and lead id to find

  try {
    for (const workflow of Object.values(workflows)) {
      const deleted = await checkAndDeleteSubscription(workflow, lead, headers)
      if (deleted) {
        return res
          .status(200)
          .json({ message: 'Subscription found and deleted' })
      }
    }
    res.status(200).json({ message: 'No subscriptions found' })
  } catch (error) {
    console.error('Error checking sequence subscription:', error)
    return res
      .status(500)
      .json({ error: 'Error checking sequence subscription' })
  }
}

const checkAndDeleteSubscription = async (workflowId, lead, headers) => {
  const response = await fetch(
    `${CLOSE_API_URL}/sequence_subscription/?sequence_id=${workflowId}&contact_id=${lead.contacts[0].id}&lead_id=${lead.id}`,
    { headers }
  )

  if (!response.ok)
    return new Error(
      'Failed to check sequence subscription',
      'Response: ',
      response,
      'Lead: ',
      lead
    )

  const subscriptions = await response.json()
  if (subscriptions.data.length > 0) {
    const subscriptionId = subscriptions.data[0].id
    const deleteResponse = await fetch(
      `${CLOSE_API_URL}/sequence_subscription/${subscriptionId}`,
      {
        method: 'DELETE',
        headers
      }
    )

    if (!deleteResponse.ok)
      return new Error(
        'Failed to unsubscribe from sequence',
        'Response: ',
        response,
        'Lead: ',
        lead
      )

    return true
  }

  return false
}
