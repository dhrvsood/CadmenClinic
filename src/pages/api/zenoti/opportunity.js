import createGuest from '@/utils/zenoti/create_guest'
import createOpportunity from '@/utils/zenoti/create_opportunity'
import searchGuest from '@/utils/zenoti/search_guest'

// const baseURL = 
//   process.env.VERCEL_ENV === 'production' ? 'https://www.imagelabmedspa.com' 
//   : process.env.VERCEL_ENV === 'preview' ? `https://${process.env.VERCEL_URL}`
//   : 'http://localhost:3000'
const baseURL = process.env.URL || 'http://localhost:3000';
const CLOSE_API_KEY = process.env.CLOSE_API_KEY
const CLOSE_API_URL = 'https://api.close.com/api/v1'
const workflowId = 'seq_3wAhxyrSapNgbOPUEo3rhR' // test workflow id

const headers = {
  Authorization: `Basic ${Buffer.from(CLOSE_API_KEY).toString('base64')}`,
  'Content-Type': 'application/json'
}


export default async function handler(req, res) {
  const employeeId = process.env.ZENOTI_EMPLOYEE_ID
  const centerId = process.env.ZENOTI_CENTER_ID
  const payload = req.body

  try {
    let guestId

    console.log("Searching for guest...")
    const existingGuests = await searchGuest(payload, centerId)

    if (existingGuests.length === 0) {
      console.log("No guests found. Creating new guest.")
      const newGuest = await createGuest(payload, centerId)
      guestId = newGuest.id
    } else {
      console.log("Existing guest found. ")
      guestId = existingGuests[0].id
    }

    if (process.env.NODE_ENV === 'production') {
      console.log("Creating opportunity...")
      // Create opportunity in Zenoti
      await createOpportunity(guestId, centerId, employeeId, payload)
    }

    payload.guestId = guestId

    console.log("PAYLOAD:", payload)  

    // TODO: Lead Generation from IL code, commented for now
    await fetch(`${baseURL}/api/booking/step2`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .catch(function (error) {
      console.error(error)
    })

    // if (process.env.VERCEL_ENV === 'production') {
    //   const leadTemplate = {
    //     campaign: payload._u_c,
    //     device: payload.device,
    //     email: payload.email,
    //     event: payload.event,
    //     fbc: payload._fbc,
    //     fbp: payload._fbp,
    //     firstName: payload.firstName,
    //     gclid: payload._u_gclid,
    //     guestId: payload.guestId,
    //     lastName: payload.lastName,
    //     medium: payload._u_m,
    //     phone: payload.phone,
    //     pixels: payload.pixels,
    //     referrer: payload.referrer,
    //     serviceId: payload.serviceId,
    //     serviceTitle: payload.serviceTitle,
    //     source: payload._u_s,
    //     userAgent: payload.userAgent,
    //     url: payload.url
    //   }

    res.status(200).json({ message: 'success', id: guestId })
  } catch (err) {
    console.error(JSON.stringify(err))
    res.status(500).json({ message: 'error' })
  }
}






// probably send payload information here?

    // // create new lead in close 
    // try {
    //   const leadResponse = await fetch(`${CLOSE_API_URL}/lead/`, {
    //     method: 'POST',
    //     headers: headers,
    //     body: JSON.stringify({
    //       name: `${payload.firstName} ${payload.lastName}`,
    //       contacts: [
    //         {
    //           name: `${payload.firstName} ${payload.lastName}`,
    //           emails: [{ email: payload.email, type: 'direct' }],
    //           phones: [{ phone: payload.phone, type: 'direct' }]
    //         }
    //       ],
    //       // status_id: leadStatuses.interested,
    //       // 'custom.cf_TtNeu25FuWOazOnWUpLo6ictq3BttcmwoLPlHVdd4UP':
    //       //   userIds.imageLab
    //     })
    //   })
    //   if (!leadResponse.ok) throw new Error('Failed to create lead', 'Lead Response: ', leadResponse, 'Payload: ', payload)
    //   let lead = await leadResponse.json()
    //   console.log("Close Lead:", lead)

    //   const opportunityResponse = await fetch(
    //     `${CLOSE_API_URL}/opportunity/`, {
    //       method: 'POST',
    //       headers: headers,
    //       body: JSON.stringify({
    //         "lead_id": lead.id,
    //         "lead_status": "User Information Submitted"
    //         // "status_id": opportunityStatuses.newLead,
    //         // "user_id": userIds.imageLab
    //       })
    //     }
    //   )
      

    //   if (!opportunityResponse.ok) throw new Error('Failed to create opportunity', 'Response: ', opportunityResponse, 'Lead: ', lead)
    //   let opportunity = await opportunityResponse.json()
    //   console.log("Close Opportunity:", opportunity)

    // } catch (error) {
    //   console.error('Error creating lead:', error)
    //   return res
    //     .status(500)
    //     .json({ message: 'Error creating lead in Close CRM' })
    // }

    // // check if lead is already subscribed to the sequence (workflow)
    // try {
    //   const response = await fetch(
    //     `${CLOSE_API_URL}/sequence_subscription/?sequence_id=${workflowId}&contact_id=${lead.contacts[0].id}&lead_id=${lead.id}`,
    //     { headers }
    //   )
    //   // if (!response.ok) throw new Error('Failed to check sequence subscription', 'Response: ', response, 'Lead: ', lead)
    //   const subscriptions = await response.json()
    //   if (subscriptions.data.length > 0) {
    //     return res
    //       .status(200)
    //       .json({ message: 'Lead already subscribed to sequence' })
    //   }
    // } catch (error) {
    //   console.error('Error checking sequence subscription:', error)
    //   return res
    //     .status(500)
    //     .json({ message: 'Error checking sequence subscription' })
    // }

    // // Find opportunity

    // try {
    //   const response = await fetch(
    //     `${CLOSE_API_URL}/lead/${lead.id}`,
    //     { headers }
    //   )
    //   if (!response.ok) throw new Error('Failed to fetch opportunity', 'Response: ', response, 'Lead: ', lead)
    //   const freshLead = await response.json()

    //   opportunity = freshLead.opportunities[0]
    // } catch (error) {
    //   console.error('Error finding opportunity:', error)
    //   return res.status(500).json({ message: 'Error finding opportunity' })
    // }

    // if (!opportunity) {
    //   console.error('Opportunity not found')
    //   return res.status(204).end()
    // }

    // if (opportunity.status_type.includes('won')) {
    //   return res.status(200).json({ message: 'Opportunity already won' })
    // }

    // // Subscribe lead to sequence
    // try {
    //   const response = await fetch(`${CLOSE_API_URL}/sequence_subscription/`, {
    //     method: 'POST',
    //     headers,
    //     body: JSON.stringify({
    //       sequence_id: workflowId,
    //       lead_id: lead.id,
    //       contact_id: lead.contacts[0].id,
    //       sender_account_id:
    //         'emailacct_UjvvnuVSry8EVB9iQCXAEZJ7nFkPQr4RXfEUgVE8pNe',
    //       sms_options: {
    //         local_phone: 'phon_YYSJYTq29oLsosqfdeCSPaiNRCcM1JxxaT9KqTdxd5N'
    //       },
    //       calls_assigned_to: [userIds.imageLab]
    //     })
    //   })

    //   if (!response.ok) throw new Error('Failed to subscribe lead to sequence', 'Response: ', response, 'Lead: ', lead)
    //   return res
    //     .status(200)
    //     .json({ message: 'Lead subscribed to sequence successfully' })
    // } catch (error) {
    //   console.error('Error subscribing lead to sequence:', error)
    //   return res
    //     .status(500)
    //     .json({ message: 'Error subscribing lead to sequence' })
    // }
