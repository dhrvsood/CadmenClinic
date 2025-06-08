import axios from 'axios'

const findCenterService = async (service) => {
  const config = {
    method: 'get',
    url: `https://api.zenoti.com/v1/centers/center_id=${center_id}/only_add_ons=false&page=1&size=50`,
    headers: {
      Authorization: `${process.env.ZENOTI_AUTH}`
    }
  }
  try {
    const response = await axios(config)
    return response.data.guests
  } catch (err) {
    console.error(err)
  }
}

export default findCenterServices
