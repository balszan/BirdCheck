import { fetchBirds } from "../Services/eBirdApi"
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
        setBirds(data)
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
          <li key={bird.subId}>{bird.comName}</li>
        ))}
      </ul>
    </>
  )
}
