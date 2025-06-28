import { createBookingIds } from '@/utils/zenoti/create_booking_ids'

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { date, serviceId, customerId, separateTherapists } = req.body.params

  // Check for missing fields
  if (!date || date === "Invalid Date" || !serviceId || !customerId) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    const bookingResponse = await createBookingIds({
      date,
      serviceId,
      customerId,
      separateTherapists
    })

    if (bookingResponse) {
      res.status(200).json(bookingResponse)
    } else {
      throw new Error('Invalid booking response')
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}
