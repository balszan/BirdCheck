import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faCheck, faSquareCheck } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function BirdCard({ bird }) {
  const [birdAdded, setBirdAdded] = useState(false)

  const addBird = () => {
    const storedBirdsString = localStorage.getItem("My Birds")
    const storedBirds = storedBirdsString ? JSON.parse(storedBirdsString) : []
    const birdExists = storedBirds.some(
      (storedBird) => storedBird.sciName === bird.sciName
    )
    if (!birdExists) {
      const updatedBirds = [...storedBirds, bird]
      localStorage.setItem("My Birds", JSON.stringify(updatedBirds))
    }
    setBirdAdded(true)
  }

  return (
    <div key={bird.subId} className="birdcard">
      <h4>{bird.comName}</h4>
      <img src={bird.imageUrl}></img>
      <div className="birdcard-buttons">
        <Link to={`/bird/${bird.sciName}`} state={{ bird: bird }}>
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-button" />
            Learn More
          </button>
        </Link>
        {!birdAdded && (
          <button onClick={addBird}>
            <FontAwesomeIcon icon={faCheck} className="icon-button" />
            Add
          </button>
        )}
      </div>
    </div>
  )
}
