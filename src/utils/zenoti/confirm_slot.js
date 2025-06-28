import axios from 'axios'

const confirmSlot = async (bookingId, guestId, serviceInfo) => {
  try {
    const config = {
      method: 'post',
      url: `https://api.zenoti.com/v1/bookings/${bookingId}/slots/confirm`,
      headers: {
        Authorization: `apikey ${process.env.ZENOTI_AUTH}`,
        'Content-Type': 'application/json'
      }
    }
    const response = await axios(config)
    return response.data
  } catch (err) {
    console.error("CAN'T CONFIRM BOOKING")
    console.error("BOOKING ID: ", bookingId)
    console.error("GUEST ID: ", guestId)
    console.error("SERVICE INFO: ", serviceInfo)
    console.error("ERROR MSG: ", err)
  }
}

export default confirmSlot
