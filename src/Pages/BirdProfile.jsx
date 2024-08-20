import Header from "../Components/Header"
import { useLocation } from "react-router-dom"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"
import { BirdContext } from "../App.jsx"

export default function BirdProfile() {
  const location = useLocation()
  const bird = location.state?.bird

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
    <>
      <Header></Header>
      <div className="bird-profile-wrapper">
        <div className="bird-profile">
          <h2>{bird.comName}</h2>
          <h4>{bird.sciName}</h4>

          <img src={bird.imageUrl}></img>
          <p>
            Spotted on {bird.obsDt} in {bird.locName}
          </p>
          <button onClick={addBird}>
            <FontAwesomeIcon icon={faCheck} className="icon-button" />
            Add to My List
          </button>
        </div>
      </div>
    </>
  )
}
