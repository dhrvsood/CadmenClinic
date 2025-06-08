import axios from 'axios'

const formatPhoneNumber = (num) => {
  const formatted = num.replace('+', '').replace(/\D/g, '')

  return formatted.length === 11 ? formatted.substring(1) : formatted
}

const searchGuest = async (payload, center_id) => {
  const config = {
    url: 'https://api.zenoti.com/v1/guests/search',
    method: 'get',
    headers: {
      Authorization: `${process.env.ZENOTI_AUTH}`
    }
  }

  // search guests by 1. phone number and 2. Email
  try {
    const phoneNumberRes = await axios({
      ...config,

      params: {
        phone: formatPhoneNumber(payload.phone),
        center_id
      }
    })

    const emailRes = await axios({
      ...config,
      params: {
        email: payload.email,
        center_id
      }
    })

    return [...phoneNumberRes.data.guests, ...emailRes.data.guests]
  } catch (err) {
    console.error(err)
  }
}
export default searchGuest
