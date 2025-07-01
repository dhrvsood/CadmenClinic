import axios from 'axios'

/**
 * Check if card guest has a card saved
 *
 * @param {import('next').NextApiRequest} req API Request
 * @param {import('next').NextApiResponse} res API Response
 */
const checkcard = async (req, res) => {
  const params = JSON.parse(req.body)

  const { guestId } = params

  if (!guestId || typeof guestId !== 'string') {
    return res.status(400).json({ error: 'Guest ID is required' })
  }

  try {
    const zenotiResp = await axios.get(
      `https://api.zenoti.com/v1/guests/${guestId}/accounts`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `apikey ${process.env.ZENOTI_AUTH}`
        },
        params: { center_id: process.env.ZENOTI_CENTER_ID }
      }
    )

    return res.status(200).json({
      has_card: zenotiResp.data.accounts.length > 0
    })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Failed to add card' })
  }
}

export default checkcard
