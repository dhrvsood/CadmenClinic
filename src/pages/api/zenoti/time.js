import retrieveAvailableSlots from '@/utils/zenoti/retrieve_available_slots'

export default async function handler(req, res) {
  try {
    const { bookingId } = req.body
    const retrievedSlots = await retrieveAvailableSlots(bookingId)

    res.status(200).json({ time: retrievedSlots })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'error' })
  }
}
