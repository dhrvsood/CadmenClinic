import axios from 'axios'

const reserveSlot = async (bookingId, time) => {
  try {
    const data = JSON.stringify({
      slot_time: time
    })
    const config = {
      method: 'post',
      url: `https://api.zenoti.com/v1/bookings/${bookingId}/slots/reserve`,
      headers: {
        Authorization: `${process.env.ZENOTI_AUTH}`,
        'Content-Type': 'application/json'
      },
      data: data
    }
    const response = await axios(config)
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export default reserveSlot
