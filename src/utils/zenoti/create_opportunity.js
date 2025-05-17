import axios from 'axios'

const createOpportunity = async (guestId, centerId, employeeId) => {
  try {
    const isDefined = (arg) => {
      if (typeof arg !== 'undefined') {
        return arg
      } else {
        return 'null'
      }
    }

    const data = JSON.stringify({
      center_id: centerId,
      opportunity_title: 'NEW Web Lead',
      opportunity_description: '',
      guest_id: guestId,
      created_by_id: employeeId,
      followup_date: new Date()
    })
    const config = {
      method: 'post',
      url: 'https://api.zenoti.com/v1/opportunities',
      headers: {
        Authorization: `${process.env.ZENOTI_AUTH}`,
        'Content-Type': 'application/json'
      },
      data: data
    }

    const response = await axios(config)
    console.log('CREATING OPPORTUNITY SUCCESS')
    return response.data
  } catch (err) {
    console.error('CREATING OPPORTUNITY FAILED')
    console.error(JSON.stringify(err))
  }
}
export default createOpportunity
