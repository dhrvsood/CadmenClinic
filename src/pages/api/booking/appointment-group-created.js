import { buffer } from 'micro'
import { getGuest } from '../../../utils/zenoti/getGuest'
import { getGuestAppointments } from '../../../utils/zenoti/getGuestAppointments'
import { Resend } from 'resend'

export const config = {
  api: {
    bodyParser: false,
  },
}

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const buf = await buffer(req)
    const rawBody = buf.toString('utf8')

    if (!rawBody) {
      return res.status(400).json({ error: 'Empty request body' })
    }

    let event
    try {
      event = JSON.parse(rawBody)
    } catch (error) {
      console.error('Error parsing JSON:', error)
      return res.status(400).json({ error: 'Invalid JSON' })
    }
    
    if (event.event_type === 'AppointmentGroup.Created') {
      try {
        const zenotiResponse = await getGuest(event.data.guest.id)
        if (zenotiResponse) {
          const appointments = await getGuestAppointments(
            zenotiResponse.id
          )

          if (appointments.appointments.length < 2) {
            const firstName = zenotiResponse.personal_info.first_name
            const lastName = zenotiResponse.personal_info.last_name
            const email = zenotiResponse.personal_info.email
            const phone = zenotiResponse.personal_info.mobile_phone.number
            const serviceTitle = event.data.appointments[0].service_name
            const slotTime = event.data.appointments[0].start_time.toLocaleString('en-US')

            forwardToTracklution(email, phone)

            try {
              // Send notification email
              const { data, error } = await resend.emails.send({
                from: 'ImageLab Booking System <info@imagelabmedspa.com>',
                to: ['arya@imagelabmedspa.com', 'david@imagelabmedspa.com', 'niko.v@imagelabmedspa.com'],
                subject: `${firstName} ${lastName} has booked ${serviceTitle}`,
                html: `
                  <h1>New Booking</h1>
                  <p>Just informing you that you've received a new booking. Details below:</p>
                  <ul>
                    <li><strong>Name:</strong> ${firstName} ${lastName}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>Service:</strong> ${serviceTitle}</li>
                    <li><strong>Time:</strong> ${slotTime}</li>
                  </ul>
                `
              })
        
              if (error) {
                console.error('Email error:', error)
                return res
                  .status(500)
                  .json({ error: error })
              }
            } catch (error) {
              console.error('Email notification error:', error)
              return res.status(500).json({ message: 'Error sending new guest booking email' })
            }

            return res.status(200).json({ message: 'New guest booked' })
          }

          return res.status(200).json({ message: 'Returning guest booked' })
        } else {
          console.error('Guest not found')
          return res.status(404).json({ error: 'Guest not found' })
        }
      } catch (error) {
        console.error('Error checking if new guest:', error)
        return res.status(500).json({ exists: false })
      }
    }
  } else {
    return res.status(405).json({error: 'Method Not Allowed'})
  }
}

async function forwardToTracklution(email, phone) {
  const tracklutionEndpoint = `https://tralut.imagelabmedspa.com/collect/hook?k=LS-77360370-6`

  const formattedPhone = `+1${phone}`

  const response = await fetch(tracklutionEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      track: "BookingComplete",
      email: email,
      phone_number: formattedPhone
    })
  })

  if (!response.ok) {
    throw new Error(`Tracklution API responded with status ${response.status}`)
  }

  return await response.json()
}
