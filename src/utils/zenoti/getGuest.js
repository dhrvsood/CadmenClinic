import { removeDashes } from "@/helpers/strings/string_modifiers"

export async function getGuest(id) {
  const formattedId = removeDashes(id)

  console.log('Getting guest from Zenoti: ', formattedId)

  const url = `https://api.zenoti.com/v1/guests/${formattedId}`

  console.log('Zenoti get guest URL:', url)

  try {
    const response = await fetch(
      url,
      {
        method: 'GET',
        headers: {
          Authorization: process.env.ZENOTI_AUTH,
          'Content-Type': 'application/json'
        }
      }
    )

    console.log('Zenoti get guest response:', response)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    console.log('Zenoti get guest data: ', data)

    return data
  } catch (error) {
    console.error('Error calling Zenoti API:', error)
    throw error
  }
}
