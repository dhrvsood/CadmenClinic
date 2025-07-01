import axios from 'axios'
import moment from 'moment'

const formatPhoneNumber = (num) => {
  const formatted = num.replace('+', '').replace(/\D/g, '')

  return formatted.length === 11 ? formatted.substring(1) : formatted
}

const createGuest = async (payload, centerId) => {
  try {
    const data = JSON.stringify({
      center_id: centerId,
      personal_info: {
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email,
        gender: 1,
        date_of_birth: moment('1900-01-01').format(),
        mobile_phone: {
          country_code: 225,
          number: formatPhoneNumber(payload.phone)
        }
      },
      preferences: {
        receive_transactional_email: true,
        receive_transactional_sms: true,
        receive_marketing_email: true
      }
    })

    const config = {
      method: 'post',
      url: 'https://api.zenoti.com/v1/guests',
      headers: {
        Authorization: `apikey ${process.env.ZENOTI_AUTH}`,
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

export default createGuest
