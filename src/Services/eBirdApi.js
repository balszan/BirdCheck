import axios from "axios"

const API_URL = "https://api.ebird.org/v2/data/obs/GB/recent"
const API_KEY = "h6968kmefavr"

export async function fetchBirds(search) {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "X-eBirdApiToken": API_KEY,
      },
      params: {
        maxResults: 50,
      },
    })
    if (!search) {
      return response.data
    }
    const filteredResults = response.data.filter((observation) =>
      observation.comName.toLowerCase().includes(search.toLowerCase())
    )
    return filteredResults
  } catch (error) {
    console.error("Didn't fetch the birds")
    throw error
  }
}
