import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { BirdContext } from "../App"
import { Link } from "react-router-dom"

export default function BirdCard({ bird }) {
  const { myBirds, setMyBirds } = useContext(BirdContext)

  const addBird = () => {
    setMyBirds((prevBirds) => {
      const storedBirdsString = localStorage.getItem("My Birds")
      const storedBirds = storedBirdsString ? JSON.parse(storedBirdsString) : []
      const birdExists = storedBirds.some(
        (storedBird) => storedBird.sciName === bird.sciName
      )
      if (!birdExists) {
        const updatedBirds = [...storedBirds, bird]
        localStorage.setItem("My Birds", JSON.stringify(updatedBirds))
        return updatedBirds
      }
      return prevBirds
    })
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
        <button onClick={addBird}>
          <FontAwesomeIcon icon={faCheck} className="icon-button" />
          Add
        </button>
      </div>
    </div>
  )
}
