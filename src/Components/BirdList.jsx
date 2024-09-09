import { fetchBirds } from "../Services/eBirdApi"
import { getBirdImage } from "../Services/flickrApi"
import { useState, useEffect } from "react"
import BirdCard from "./BirdCard"

export default function BirdList({ search, setSearch }) {
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

  useEffect(() => {
    if (search !== null) {
      async function getFilteredBirds() {
        try {
          setLoading(true)
          const data = await fetchBirds(search)
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
      getFilteredBirds()
    }
  }, [search])

  if (loading) {
    return (
      <div aria-live="polite" className="loading">
        Loading ...
      </div>
    )
  }
  if (error) {
    return (
      <div aria-live="assertive" className="error">
        Error: {error}
      </div>
    )
  }

  return (
    <section aria-label="Recent Bird Sightings">
      <h2 className="title">
        Bird sightings in the UK within the last 24 hours:
      </h2>
      <div className="birdlist-container" role="list">
        {birds.map((bird) => (
          <BirdCard key={bird.sciName} role="listitem" bird={bird} />
        ))}
      </div>
    </section>
  )
}
