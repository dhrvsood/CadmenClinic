import axios from 'axios'
import axiosRetry from 'axios-retry'

const retrieveAvailableSlots = async (bookingId) => {
  const config = {
    method: 'get',
    url: `https://api.zenoti.com/v1/bookings/${bookingId}/slots?check_future_day_availability=true`,
    headers: {
      Authorization: `${process.env.ZENOTI_AUTH}`
    }
  }

  // Apply retry logic with exponential backoff
  axiosRetry(axios, {
    retries: 3, // Retry up to 3 times
    retryDelay: axiosRetry.exponentialDelay, // Use exponential backoff
    retryCondition: (error) => {
      // Retry only if the error is a rate limit error (status code 429)
      return axiosRetry.isRetryableError(error) && error.response.status === 429
    }
  })

  try {
    const response = await axios(config)
    return response.data // Return data on success
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Axios error:', err.toJSON())
      if (err.response && err.response.status === 429) {
        console.error('Please Wait for 1 sec and try again.')
        // You can handle rate limit exceeded error here, e.g., show a message to the user
      } else {
        console.error('Request failed:', err.message)
        // Handle other errors as needed
      }
    } else {
      console.error('Error:', err.message)
      // Handle other non-Axios errors
    }
    throw err // Re-throw the error for upstream handling
  }
}

export default retrieveAvailableSlots
