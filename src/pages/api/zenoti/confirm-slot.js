import confirmSlot from '@/utils/zenoti/confirm_slot'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const params = JSON.parse(req.body)

  const { bookingId, guestId, serviceInfo } = params

  if (!bookingId) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    // const reserved = await reserveSlot(bookingId, time)
    // if (reserved && reserved.is_reserved) {
    //   return res.status(200).json({ ...reserved })
    const confirmed = await confirmSlot(bookingId, guestId, serviceInfo)
 
    if (confirmed && confirmed.is_confirmed) {
      console.log('Booking Complete', { Guest: guestId, Service: serviceInfo.serviceId })
      return res.status(200).json({ ...confirmed })
    }

    return res.status(500).json({ message: 'Booking not saved' })
  } catch (err) {
    console.error("CAN'T CONFIRM BOOKING")
    console.error("BOOKING ID: ", bookingId)
    console.error("GUEST ID: ", guestId)
    console.error("SERVICE INFO: ", serviceInfo)
    console.error("ERROR MSG: ", err)
    return res
      .status(500)
      .json({ message: 'Server error', details: err.message })
  }
}
