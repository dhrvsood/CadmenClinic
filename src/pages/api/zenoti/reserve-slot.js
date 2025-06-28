import confirmSlot from '@/utils/zenoti/confirm_slot'
import reserveSlot from '@/utils/zenoti/reserve_slot'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const params = JSON.parse(req.body)

  const { bookingId, time } = params

  if (!bookingId || !time) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    const reserved = await reserveSlot(bookingId, time)
    if (reserved && reserved.is_reserved) {
      return res.status(200).json({ ...reserved })
      // const confirmed = await confirmSlot(bookingId)

      // if (confirmed && confirmed.is_confirmed) {
      //   return res.status(200).json({ ...confirmed })
      // }
    }
    return res.status(200).json({ message: 'Booking not saved' })
  } catch (err) {
    console.error(err)
    return res
      .status(500)
      .json({ message: 'Server error', details: err.message })
  }
}
