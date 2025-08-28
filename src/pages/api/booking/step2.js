import { buffer } from 'micro'

// CONFIGS
export const config = {
  api: { bodyParser: false }
}
const CLOSE_API_KEY = process.env.CLOSE_API_KEY
const CLOSE_API_URL = 'https://api.close.com/api/v1'
const headers = {
  Authorization: `Basic ${Buffer.from(CLOSE_API_KEY).toString('base64')}`,
  'Content-Type': 'application/json'
}
const SENDER_ACCOUNT_ID = 'emailacct_ZhChhtvuidMZQU6Rk95NTYtIlnCPqxNvnxnjGk34n90'
const USER_IDS = {
  'cadmen': 'user_RJtB0zgUSnct8lhAgLRhJxEKJx1sdFDMYAVT2IHCGVH'
}

// MAIN HANDLER
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  try {
    const buf = await buffer(req)
    const rawBody = buf.toString('utf8')
    if (!rawBody) return res.status(400).json({ error: 'Empty request body' })

    const event = JSON.parse(rawBody)
    if (!event.email || !event.firstName || !event.lastName) {
      return res.status(400).json({ message: 'Missing required fields' })
    }
    console.log("All required fields are there")

    // event.referrer = normalizeReferrer(event.referrer)
    const email = normalizeEmail(event.email)
    console.log("Email normalized:", email)
    let lead = await searchLeadByEmail(email)
    let opportunity

    if (!lead) {
      console.log("Creating lead in Close...")
      lead = await createLead(event, email)
      opportunity = await createOpportunity(lead.id)
      console.log("Close CRM opportunity:", opportunity)
    } else {
      console.log("Lead already exists in Close:", lead)
      return res.status(200).json({ message: 'Lead already exists' })
    }

    console.log("Close CRM Lead:", lead)


    if (lead.status_label?.toLowerCase().includes('scheduled')) {
      console.log("Lead already scheduled")
      return res.status(200).json({ message: 'Lead already scheduled' })
    }

    // test workflow id for now
    const workflowId = 'seq_3wAhxyrSapNgbOPUEo3rhR'
    // const workflowId = resolveWorkflow(event.title)
    const alreadySubscribed = await checkSequenceSubscription(
      lead.id,
      lead.contacts[0].id,
      workflowId
    )

    if (alreadySubscribed) {
      console.log("Lead already subscribed")
      return res.status(200).json({ message: 'Lead already subscribed' })
    }

    await subscribeLeadToSequence(lead, workflowId)
    console.log("Lead subscribed to sequence")

    return res
      .status(200)
      .json({ message: 'Lead subscribed to sequence successfully' })
  } catch (err) {
    console.error('Handler error:', err)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}


// ================
// HELPER FUNCTIONS
// ================
async function searchLeadByEmail(email) {
  const query = {
    limit: null,
    query: {
      negate: false,
      queries: [
        { negate: false, object_type: 'lead', type: 'object_type' },
        {
          negate: false,
          queries: [
            {
              negate: false,
              related_object_type: 'contact',
              related_query: {
                negate: false,
                queries: [
                  {
                    negate: false,
                    related_object_type: 'contact_email',
                    related_query: {
                      negate: false,
                      queries: [
                        {
                          condition: {
                            mode: 'full_words',
                            type: 'text',
                            value: email
                          },
                          field: {
                            field_name: 'email',
                            object_type: 'contact_email',
                            type: 'regular_field'
                          },
                          negate: false,
                          type: 'field_condition'
                        }
                      ],
                      type: 'and'
                    },
                    this_object_type: 'contact',
                    type: 'has_related'
                  }
                ],
                type: 'and'
              },
              this_object_type: 'lead',
              type: 'has_related'
            }
          ],
          type: 'and'
        }
      ],
      type: 'and'
    }
  }

  const res = await fetch(`${CLOSE_API_URL}/data/search/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(query)
  })
  const data = await safeJson(res)
  return data.data[0]
}

async function createLead(event, email) {
  const res = await fetch(`${CLOSE_API_URL}/lead/`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name: `${event.firstName} ${event.lastName}`,
      contacts: [
        {
          name: `${event.firstName} ${event.lastName}`,
          emails: [{ email, type: 'direct' }],
          phones: [{ phone: event.phone, type: 'direct' }]
        }
      ],
      // status_id: LEAD_STATUSES.interested,
      // 'custom.cf_TtNeu25FuWOazOnWUpLo6ictq3BttcmwoLPlHVdd4UP': USER_IDS.imageLab
    })
  })
  console.log("Lead Res:", res)
  return safeJson(res)
}

async function createOpportunity(leadId) {
  const res = await fetch(`${CLOSE_API_URL}/opportunity/`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      lead_id: leadId,
      // status_id: OPPORTUNITY_STATUSES.newLead,
      user_id: USER_IDS.cadmen
    })
  })
  return safeJson(res)
}

async function checkSequenceSubscription(leadId, contactId, workflowId) {
  const res = await fetch(
    `${CLOSE_API_URL}/sequence_subscription/?sequence_id=${workflowId}&contact_id=${contactId}&lead_id=${leadId}`,
    { headers }
  )
  const data = await safeJson(res)
  return data.data.length > 0
}

async function subscribeLeadToSequence(lead, workflowId) {
  const res = await fetch(`${CLOSE_API_URL}/sequence_subscription/`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      sequence_id: workflowId,
      lead_id: lead.id,
      contact_id: lead.contacts[0].id,
      sender_account_id: SENDER_ACCOUNT_ID,
      // sms_options: { local_phone: LOCAL_PHONE_ID },
      // calls_assigned_to: [USER_IDS.cadmen]
    })
  })
  return safeJson(res)
}

function normalizeEmail(email) {
  return email.toLowerCase().replace(/\s/g, '').trim()
}

const safeJson = async (res) => {
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  return res.json()
}

// OLD CODE
// import { buffer } from 'micro'

// export const config = {
//   api: {
//     bodyParser: false
//   }
// }

// const CLOSE_API_KEY = process.env.CLOSE_API_KEY
// const CLOSE_API_URL = 'https://api.close.com/api/v1'

// const referrers = [
//   'Bing',
//   'Direct',
//   'Facebook',
//   'Google',
//   'Instagram',
//   'Other',
//   'Yahoo',
//   'Yelp'
// ]

// const workflows = {
//   semaglutide: 'seq_4mdb3tl0ZFPGjW61ClerAA',
//   dysport: 'seq_6wKn7na4k08hb5oTGaPWbA',
//   lip: 'seq_64mRBs0ioNR2zsEi92TxKJ',
//   others: 'seq_3EIy1YBnwzSQKNrf7omcfS'
// }

// const userIds = {
//   imageLab: 'user_PhWu8v2pCJznq0PE0o6mYAen5EzWjK71TKsWaNC0ZWa'
// }

// const opportunityStatuses = {
//   newLead: 'stat_W0TKbKdT9UmkmWif9R4cod5NyOMvVEAR2FgTtyYlGF8'
// }

// const leadStatuses = {
//   interested: 'stat_HWhM0sNUK0yefWvIxgqkEpD0Y5oxzFOOA7sFwomTRK5'
// }

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' })
//   }

//   const buf = await buffer(req)
//   const rawBody = buf.toString('utf8')

//   if (!rawBody) {
//     return res.status(400).json({ error: 'Empty request body' })
//   }

//   // Catch event

//   let event
//   try {
//     event = JSON.parse(rawBody)
//   } catch (error) {
//     console.error('Error parsing JSON:', error)
//     return res.status(400).json({ error: 'Invalid JSON' })
//   }

//   try {
//     // Modify referrer
//     event.referrer = referrers.includes(event.referrer)
//       ? event.referrer
//       : 'Other'

//     // Check for required fields
//     if (!event.email || !event.firstName || !event.lastName) {
//       return res.status(400).json({ message: 'Missing required fields' })
//     }

//     const formattedEmail = event.email.toString().toLowerCase().replace(/\s/g, '').trim()

//     const headers = {
//       Authorization: `Basic ${Buffer.from(CLOSE_API_KEY).toString('base64')}`,
//       'Content-Type': 'application/json'
//     }

//     // Find lead in Close CRM
//     let lead
//     let opportunity

//     try {
//       const response = await fetch(`${CLOSE_API_URL}/data/search/`, {
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify({
//           "limit": null,
//             "query": {
//                 "negate": false,
//                 "queries": [
//                     {
//                         "negate": false,
//                         "object_type": "lead",
//                         "type": "object_type"
//                     },
//                     {
//                         "negate": false,
//                         "queries": [
//                             {
//                                 "negate": false,
//                                 "related_object_type": "contact",
//                                 "related_query": {
//                                     "negate": false,
//                                     "queries": [
//                                         {
//                                             "negate": false,
//                                             "related_object_type": "contact_email",
//                                             "related_query": {
//                                                 "negate": false,
//                                                 "queries": [
//                                                     {
//                                                         "condition": {
//                                                             "mode": "full_words",
//                                                             "type": "text",
//                                                             "value": formattedEmail
//                                                         },
//                                                         "field": {
//                                                             "field_name": "email",
//                                                             "object_type": "contact_email",
//                                                             "type": "regular_field"
//                                                         },
//                                                         "negate": false,
//                                                         "type": "field_condition"
//                                                     }
//                                                 ],
//                                                 "type": "and"
//                                             },
//                                             "this_object_type": "contact",
//                                             "type": "has_related"
//                                         }
//                                     ],
//                                     "type": "and"
//                                 },
//                                 "this_object_type": "lead",
//                                 "type": "has_related"
//                             }
//                         ],
//                         "type": "and"
//                     }
//                 ],
//                 "type": "and"
//             },
//             "results_limit": null,
//             "sort": []
//         })
//       })

//       if (!response.ok) throw new Error('Failed to fetch lead', 'Response: ', response, 'Event: ', event)
//       const data = await response.json()
//       lead = data.data[0]

//     } catch (error) {
//       console.error('Error finding lead:', error)
//       return res
//         .status(500)
//         .json({ message: 'Error finding lead in Close CRM' })
//     }

//     if (!lead) {
//       // Create new lead
//       try {
//         const leadResponse = await fetch(`${CLOSE_API_URL}/lead/`, {
//           method: 'POST',
//           headers: headers,
//           body: JSON.stringify({
//             name: `${event.firstName} ${event.lastName}`,
//             contacts: [
//               {
//                 name: `${event.firstName} ${event.lastName}`,
//                 emails: [{ email: formattedEmail, type: 'direct' }],
//                 phones: [{ phone: event.phone, type: 'direct' }]
//               }
//             ],
//             status_id: leadStatuses.interested,
//             'custom.cf_TtNeu25FuWOazOnWUpLo6ictq3BttcmwoLPlHVdd4UP':
//               userIds.imageLab
//           })
//         })
//         if (!leadResponse.ok) throw new Error('Failed to create lead', 'Lead Response: ', leadResponse, 'Event: ', event)
//         lead = await leadResponse.json()

//         const opportunityResponse = await fetch(
//           `${CLOSE_API_URL}/opportunity/`, {
//             method: 'POST',
//             headers: headers,
//             body: JSON.stringify({
//               "lead_id": lead.id,
//               "status_id": opportunityStatuses.newLead,
//               "user_id": userIds.imageLab
//             })
//           }
//         )

//         if (!opportunityResponse.ok) throw new Error('Failed to create opportunity', 'Response: ', opportunityResponse, 'Lead: ', lead)
//         opportunity = await opportunityResponse.json()

//       } catch (error) {
//         console.error('Error creating lead:', error)
//         return res
//           .status(500)
//           .json({ message: 'Error creating lead in Close CRM' })
//       }
//     } else {
//       return res.status(200).json({ message: 'Lead already exists' })
//     }

//     // Send to call center's Make endpoint

//     try{
//       const makeResponse = await fetch('https://hook.us2.make.com/2qbxi9bgpg5onzwsahzpjxsed2ox91l7', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           ID: lead.id,
//           Name: event.firstName,
//           Email: formattedEmail,
//           CreatedDate: new Date().toISOString(),
//           Phone: event.phone,
//           Service: event.title,
//           Status: 'Interested',
//         })
//       })
  
//       if (!makeResponse.ok) {
//         console.error('Cannot send to call center:', makeResponse.statusText)
//         return res.status(500).json({ error: 'Cannot send to call center' })
//       }
//     } catch (error) {
//       console.error('Cannot send to call center:', error)
//       return res.status(500).json({ error: 'Cannot send to call center' })
//     }

//     if (lead.status_label.toLowerCase().includes('scheduled')) {
//       return res.status(200).json({ message: 'Lead already scheduled' })
//     }

//     const serviceTitle = event.title.toLowerCase()
//     let workflowId = workflows.others

//     if (serviceTitle.includes('dysport')) {
//       workflowId = workflows.dysport
//     } else if (serviceTitle.includes('lip')) {
//       workflowId = workflows.lip
//     } else if (serviceTitle.includes('semaglutide')) {
//       workflowId = workflows.semaglutide
//     } else {
//       workflowId = workflows.others
//     }

//     if (!workflowId) {
//       return res.status(400).json({ message: 'Invalid serviceTitle' })
//     }

//     // Check if lead is already subscribed to the sequence
//     try {
//       const response = await fetch(
//         `${CLOSE_API_URL}/sequence_subscription/?sequence_id=${workflowId}&contact_id=${lead.contacts[0].id}&lead_id=${lead.id}`,
//         { headers }
//       )
//       if (!response.ok) throw new Error('Failed to check sequence subscription', 'Response: ', response, 'Lead: ', lead)
//       const subscriptions = await response.json()
//       if (subscriptions.data.length > 0) {
//         return res
//           .status(200)
//           .json({ message: 'Lead already subscribed to sequence' })
//       }
//     } catch (error) {
//       console.error('Error checking sequence subscription:', error)
//       return res
//         .status(500)
//         .json({ message: 'Error checking sequence subscription' })
//     }

//     // Find opportunity

//     try {
//       const response = await fetch(
//         `${CLOSE_API_URL}/lead/${lead.id}`,
//         { headers }
//       )
//       if (!response.ok) throw new Error('Failed to fetch opportunity', 'Response: ', response, 'Lead: ', lead)
//       const freshLead = await response.json()

//       opportunity = freshLead.opportunities[0]
//     } catch (error) {
//       console.error('Error finding opportunity:', error)
//       return res.status(500).json({ message: 'Error finding opportunity' })
//     }

//     if (!opportunity) {
//       console.error('Opportunity not found')
//       return res.status(204).end()
//     }

//     if (opportunity.status_type.includes('won')) {
//       return res.status(200).json({ message: 'Opportunity already won' })
//     }

//     // Subscribe lead to sequence
//     try {
//       const response = await fetch(`${CLOSE_API_URL}/sequence_subscription/`, {
//         method: 'POST',
//         headers,
//         body: JSON.stringify({
//           sequence_id: workflowId,
//           lead_id: lead.id,
//           contact_id: lead.contacts[0].id,
//           sender_account_id:
//             'emailacct_UjvvnuVSry8EVB9iQCXAEZJ7nFkPQr4RXfEUgVE8pNe',
//           sms_options: {
//             local_phone: 'phon_YYSJYTq29oLsosqfdeCSPaiNRCcM1JxxaT9KqTdxd5N'
//           },
//           calls_assigned_to: [userIds.imageLab]
//         })
//       })

//       if (!response.ok) throw new Error('Failed to subscribe lead to sequence', 'Response: ', response, 'Lead: ', lead)
//       return res
//         .status(200)
//         .json({ message: 'Lead subscribed to sequence successfully' })
//     } catch (error) {
//       console.error('Error subscribing lead to sequence:', error)
//       return res
//         .status(500)
//         .json({ message: 'Error subscribing lead to sequence' })
//     }
//   } catch (error) {
//     console.error('Unexpected error:', error)
//     return res
//       .status(500)
//       .json({ message: 'Error processing step 2 booking flow' })
//   }
// }
