import axios from "axios"

const FLICKR_API_BASE_URL = "https://www.flickr.com/services/rest/"
const FLICKR_API_KEY = "a28525dbb5ddd24166a80373ef9d4357"
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

export async function getBirdImage(birdName) {
  try {
    const response = await axios.get(`${CORS_PROXY}${FLICKR_API_BASE_URL}`, {
      params: {
        method: "flickr.photos.search",
        api_key: FLICKR_API_KEY,
        text: `${birdName} bird`,
        format: "json",
        nojsoncallback: 1,
        per_page: 1,
        sort: "relevance",
      },
    })
    if (response.data.photos.photo.length > 0) {
      const photo = response.data.photos.photo[0]
      return `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`
    }
    return null
  } catch (error) {
    console.error("Failed to get bird images: ", error.message)
    return null
  }
}
