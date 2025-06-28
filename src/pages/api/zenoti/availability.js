import retrieveAvailableSlots from '@/utils/zenoti/retrieve_available_slots'

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { bookingId } = req.body.params

  if (!bookingId) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    const availabilityResponse = await retrieveAvailableSlots(bookingId)
    if (availabilityResponse) {
      res
        .status(200)
        .json({ bookingId: bookingId, response: availabilityResponse })
    } else {
      throw new Error('Invalid availability response')
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}
