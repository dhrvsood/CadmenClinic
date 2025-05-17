export async function getGuestAppointments(guestId) {

  const ZENOTI_API_URL = `https://api.zenoti.com/v1/guests/${guestId}/appointments`

  console.log('Getting guest appointments from Zenoti: ', ZENOTI_API_URL)

  try {
    const response = await fetch(
      ZENOTI_API_URL,
      {
        method: 'GET',
        headers: {
          Authorization: process.env.ZENOTI_AUTH,
          'Content-Type': 'application/json'
        }
      }
    )

    console.log('Zenoti get guest appointments response: ', response)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    console.log('Zenoti get guest appointments data: ', data)

    return data
  } catch (error) {
    console.error('Error calling Zenoti API:', error)
    throw error
  }
}
