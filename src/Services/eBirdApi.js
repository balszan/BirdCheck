import axios from "axios"

const API_URL = "https://api.ebird.org/v2/data/obs/GB/recent"
const API_KEY = "h6968kmefavr"

export async function fetchBirds() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "X-eBirdApiToken": API_KEY,
      },
      params: {
        maxResults: 30,
      },
    })
    return response.data
  } catch (error) {
    console.error("Didn't fetch the birds")
    throw error
  }
}
