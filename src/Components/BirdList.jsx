import { fetchBirds } from "../Services/eBirdApi"
import { getBirdImage } from "../Services/flickrApi"
import { useState, useEffect } from "react"
import BirdCard from "./BirdCard"

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
      <h2 className="title">Recent Bird Sightings in the UK:</h2>
      <div className="birdlist-container">
        {birds.map((bird) => (
          <BirdCard key={bird.sciName} bird={bird} />
        ))}
      </div>
    </>
  )
}
