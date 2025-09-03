import axios from 'axios'

const addCard = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const params = JSON.parse(req.body)

  const { guestId } = params

  if (!guestId) {
    return res.status(400).json({ error: 'Guest ID is required' })
  }

  try {
    const data = {
      center_id: process.env.ZENOTI_CENTER_ID,
      redirect_uri: `https://cadmen-clinic-2d9naa8g4-dhruv-soods-projects-cc84876a.vercel.app/paymentsuccess` // UPDATED paymentsuccess screen
      // redirect_uri: `${'https://cadmen-clinic-m8tfbifdv-dhruv-soods-projects-cc84876a.vercel.app'}/paymentsuccess`
      // redirect_uri: 'https://cadmenclinic.ca/paymentsuccess'
    }
    console.log("ADDCARD DATA:", data)

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
    console.log("ADDCARD RESPONSE:", response)
    const error = response.data.error
    if (error) {
      console.error("Error:", error.code, error.message)
      return res.status(error.code).json(error.message)
    }
    return res.status(200).json(response.data)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Failed to add card' })
  }
}

export default addCard
