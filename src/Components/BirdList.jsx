import { fetchBirds } from "../Services/eBirdApi"
import { getBirdImage } from "../Services/flickrApi"
import { useState, useEffect } from "react"

export default function BirdList() {
  const [birds, setBirds] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getBirds() {
      try {
        setLoading(true)
        const data = await fetchBirds()
        const birdsWithImages = await Promise.all(
          data.map(async (bird) => {
            const imageUrl = await getBirdImage(bird.comName)
            return { ...bird, imageUrl }
          })
        )
        setBirds(birdsWithImages)
      } catch (error) {
        setError("Failed to get birds")
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getBirds()
  }, [])

  if (loading) {
    return <div className="loading"> Loading ... </div>
  }
  if (error) {
    return <div className="error"> Error: {error} </div>
  }

  return (
    <>
      Recent Bird Sightings in the UK:
      <ul>
        {birds.map((bird) => (
          <li key={bird.subId}>
            {bird.comName}
            <img src={bird.imageUrl}></img>
          </li>
        ))}
      </ul>
    </>
  )
}
