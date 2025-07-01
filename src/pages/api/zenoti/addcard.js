import axios from 'axios'

const baseURL =
  process.env.CONTEXT === 'production'
    ? 'https://cadmenclinic.ca'
    : process.env.URL || 'http://localhost:3000';

const addCard = async (req, res) => {
  const params = JSON.parse(req.body)

  const { guestId } = params

  if (!guestId) {
    return res.status(400).json({ error: 'Guest ID is required' })
  }

  try {
    const data = {
      center_id: process.env.ZENOTI_CENTER_ID,
      redirect_uri: `${baseURL}/paymentsuccess`
    }

    const config = {
      method: 'post',
      url: `https://api.zenoti.com/v1/guests/${guestId}/accounts`,
      headers: {
        Authorization: `apikey ${process.env.ZENOTI_AUTH}`,
        'Content-Type': 'application/json'
      },
      data: data
    }

    const response = await axios(config)
    return res.status(200).json(response.data)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Failed to add card' })
  }
}

export default addCard
