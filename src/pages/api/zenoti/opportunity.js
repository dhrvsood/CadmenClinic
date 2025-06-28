import createGuest from '@/utils/zenoti/create_guest'
import createOpportunity from '@/utils/zenoti/create_opportunity'
import searchGuest from '@/utils/zenoti/search_guest'
import axios from 'axios'

// const baseURL = 
//   process.env.VERCEL_ENV === 'production' ? 'https://www.imagelabmedspa.com' 
//   : process.env.VERCEL_ENV === 'preview' ? `https://${process.env.VERCEL_URL}`
//   : 'http://localhost:3000'
const baseURL = 'http://localhost:3000'

export default async function handler(req, res) {
  console.log("START OF OPPORTUNITY.JS")
  

  const employeeId = process.env.ZENOTI_EMPLOYEE_ID
  const centerId = process.env.ZENOTI_CENTER_ID
  const payload = req.body

  // console.log("Payload:", payload)
  console.log("Center ID:", centerId)

  try {
    let guestId

    console.log("opportunity.js before calling searchguest")
    const existingGuests = await searchGuest(payload, centerId)
    console.log("Existing Guests:", existingGuests)

    if (existingGuests.length === 0) {
      const newGuest = await createGuest(payload, centerId)
      guestId = newGuest.id
    } else {
      guestId = existingGuests[0].id
    }

    if (process.env.NODE_ENV === 'production') {
      await createOpportunity(guestId, centerId, employeeId, payload)
    }

    payload.guestId = guestId

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

    if (process.env.VERCEL_ENV === 'production') {
      const leadTemplate = {
        campaign: payload._u_c,
        device: payload.device,
        email: payload.email,
        event: payload.event,
        fbc: payload._fbc,
        fbp: payload._fbp,
        firstName: payload.firstName,
        gclid: payload._u_gclid,
        guestId: payload.guestId,
        lastName: payload.lastName,
        medium: payload._u_m,
        phone: payload.phone,
        pixels: payload.pixels,
        referrer: payload.referrer,
        serviceId: payload.serviceId,
        serviceTitle: payload.serviceTitle,
        source: payload._u_s,
        userAgent: payload.userAgent,
        url: payload.url
      }

      axios
        .post(`${baseURL}/api/db/create`, leadTemplate)
        .catch(function (error) {
          console.error('Error sending to /api/db/create:', error)
        })
    }

    res.status(200).json({ message: 'success', id: guestId })
  } catch (err) {
    console.error(JSON.stringify(err))
    res.status(500).json({ message: 'error' })
  }
}
