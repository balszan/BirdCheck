import { useEffect, useState } from "react"
import Header from "../Components/Header"
import MyListItem from "../Components/MyListItem"

export default function MyList() {
  const [myBirds, setMyBirds] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadBirds = () => {
      setIsLoading(true)
      setError(null)
      try {
        const storedBirds = localStorage.getItem("My Birds")
        if (storedBirds) {
          const parsedBirds = JSON.parse(storedBirds)
          if (Array.isArray(parsedBirds)) {
            setMyBirds(parsedBirds)
          } else {
            throw new Error("Stored data is not an array")
          }
        } else {
          setMyBirds([])
        }
      } catch (err) {
        console.error("Error loading birds:", err)
        setError("Failed to load your bird list. Please try again.")
        setMyBirds([])
      } finally {
        setIsLoading(false)
      }
    }

    loadBirds()
  }, [])

  const updateBirds = (updatedBirds) => {
    setMyBirds(updatedBirds)
    try {
      localStorage.setItem("My Birds", JSON.stringify(updatedBirds))
    } catch (err) {
      console.error("Error saving birds:", err)
      setError("Failed to save your bird list. Please try again.")
    }
  }

  if (isLoading) {
    return (
      <main>
        <Header />
        <div className="loading">Loading your bird list...</div>
      </main>
    )
  }

  if (error) {
    return (
      <main>
        <Header />
        <div className="error">{error}</div>
      </main>
    )
  }

  return (
    <main>
      <Header />
      <section aria-label="Your added birds">
        {myBirds.length > 0 ? (
          myBirds.map((bird) => (
            <MyListItem
              key={bird.sciName}
              bird={bird}
              myBirds={myBirds}
              setMyBirds={updateBirds}
            />
          ))
        ) : (
          <p className="information">No Birds added yet.</p>
        )}
      </section>
    </main>
  )
}
