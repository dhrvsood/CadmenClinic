import { buffer } from 'micro'

export const config = {
  api: {
    bodyParser: false,
  },
}

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

    if (event.event_type === 'Invoice.Closed') {
      try {
        await forwardToTracklution(event)
        res.status(200).json({ message: 'Event processed successfully' })
      } catch (error) {
        console.error('Error forwarding to Tracklution:', error)
        res.status(500).json({ error: 'Internal Server Error' })
      }
    } else {
      console.warn('Unsupported event type:', event.type)
      res.status(400).json({ error: 'Unsupported event type' })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

async function forwardToTracklution(event) {
  const tracklutionEndpoint = 'https://tralut.imagelabmedspa.com/collect/hook?k=LS-77360370-6'

  const response = await fetch(tracklutionEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      track: "Purchase",
      email: event.data.invoice.guest.guest_email,
      phone: event.data.invoice.guest.mobile_phone,
      firstName: event.data.invoice.guest.first_name,
      lastName: event.data.invoice.guest.last_name,
      value: event.data.invoice.total_price.sum_total,
      currency: 'USD'
    })
  })

  if (!response.ok) {
    throw new Error(`Tracklution API responded with status ${response.status}`)
  }

  return await response.json()
}
