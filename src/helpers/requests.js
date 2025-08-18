import axios from 'axios'

// Common function for Axios POST requests
export const axiosPost = async (url, params) => {
  try {
    const response = await axios.post(url, params)
    console.log(response.data);
    return response.data
  } catch (error) {
    console.error(`Error in Axios POST to ${url}: ${error.message}`)
    return null
  }
}

// Common function for Fetch POST requests
export const fetchPost = async (url, vals) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(vals)
    })
    if (response.ok) {
      return await response.json()
    } else {
      throw new Error('Request failed')
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
