import axios from 'axios'

const findAppointment = async ({ appointmentId }) => {
  const config = {
    method: 'get',
    url: `https://api.zenoti.com/v1/appointments/${appointmentId}`,
    headers: {
      Authorization: `apikey ${process.env.ZENOTI_AUTH}`
    }
  }
  try {
    const response = await axios(config)
    return response.data
  } catch (err) {
    console.error(err)
  }
}

export default findAppointment
