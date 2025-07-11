import { axiosPost, fetchPost } from '@/helpers/requests'

// API functions
export const fetchBookingIds = (date, serviceId, customerId, separateTherapists ) =>
  axiosPost('/api/zenoti/booking', { params: { date, serviceId, customerId, separateTherapists } })

export const fetchAvailableSlots = (bookingId) =>
  axiosPost('/api/zenoti/availability', { params: { bookingId } })

export const createOpportunity = (vals) =>
  axiosPost('/api/zenoti/opportunity', vals)

export const sendEmail = (vals) =>
  axiosPost('/api/contact/email', vals)

export const fbConversionsApi = (payload) =>
  axiosPost('https://sl-fb-conversions.herokuapp.com/', payload)

export const reserveBookingSlot = (bookingId, time) =>
  axiosPost('/api/zenoti/reserve-slot', { params: { bookingId, time } })

export const confirmBookingSlot = (bookingId) =>
  axiosPost('/api/zenoti/confirm-slot', { params: { bookingId } })

export const zapierBookedAppointment = (vals) =>
  axiosPost('/api/contact/appointment', vals)

//  if (process.env.NODE_ENV === 'production') {
//     return fetchPost(
//       'https://hooks.zapier.com/hooks/catch/2194585/35w51ew/',
//       vals
//     )
//  }

// // Zapier post for Coming Soon Form Data
export async function postComingSoonFormData(vals) {
  console.log('Posting request to Endpoint...')
  return fetchPost(
    'https://hooks.zapier.com/hooks/catch/2194585/31t606v/',
    vals
  )
}

// Zapier post for Mailchimp / newsletter form
export async function postNewsletterFormData(vals) {
  console.log('Posting request to Endpoint...')
  return fetchPost(
    'https://hooks.zapier.com/hooks/catch/2194585/3rb21z2/',
    vals
  )
}
