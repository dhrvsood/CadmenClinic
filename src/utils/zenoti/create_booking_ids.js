import axios from 'axios'

const complementaryInitialSkinAssessment =
  '506b2a6d-bbff-4f91-92d8-80bc98c111ed'

const serviceCheckIds = [
  '5d930052-5ed2-4a35-be64-ba19800371c8', // consultation
  '115ece44-9edf-4ce6-8b6e-6343785bc680', // semaglutide
  '9fcca66b-6365-49d4-99ae-76b1232c0398', // injectables
  '312fb5ee-9abc-41a4-add8-94c0b75c6b5e' // aesthetic
]

const therapistIds = [
  'c47296df-211f-4740-9d9b-82a0254b4bfa', // Karolina Kowalska
  'a47e4c34-3b80-4c4a-bf1a-689d2b1e02e6', // Kristen Repta
  '6292402e-0e97-4f21-90f0-c3c2d0ed38a9', // Brina Naegele
  '9f8ab997-8387-434d-a4d5-1644cea379d3' // Nadia Ryan
]

const createBooking = async ({ date, serviceId, customerId, therapistId }) => {
  try {
    const add_ons = !serviceCheckIds.includes(serviceId)
      ? [
          {
            item: {
              id: complementaryInitialSkinAssessment
            }
          }
        ]
      : []

    var data
    if (therapistId) {
      data = {
        center_id: process.env.ZENOTI_CENTER_ID,
        date: date,
        is_only_catalog_employees: 'true',
        guests: [
          {
            id: customerId,
            items: [
              {
                item: {
                  id: serviceId
                },
                therapist: {
                  id: therapistId
                }
              }
            ]
          }
        ]
      }
    } else {
      data = {
        center_id: process.env.ZENOTI_CENTER_ID,
        date: date,
        is_only_catalog_employees: 'true',
        guests: [
          {
            id: customerId,
            items: [
              {
                item: {
                  id: serviceId
                }
              }
            ]
          }
        ]
      }
    }

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.zenoti.com/v1/bookings?is_double_booking_enabled=false',
      headers: {
        Authorization: `apikey ${process.env.ZENOTI_AUTH}`,
        'Content-Type': 'application/json'
      },
      data
    }

    const response = await axios(config)
    console.log('Create Booking success response: ', response.data);
    return response.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const createBookingIds = async ({ date, serviceId, customerId, separateTherapists }) => {
  if (separateTherapists) {
    const promises = therapistIds.map((therapistId) =>
      createBooking({ date, serviceId, customerId, therapistId })
    )
    return Promise.all(promises)
  } else {
    return await createBooking({ date, serviceId, customerId })
  }
}
