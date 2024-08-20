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
      const storedBirds = JSON.parse(localStorage.getItem("My Birds"))
      const updatedBirds = [...storedBirds, ...prevBirds, bird]
      localStorage.setItem("My Birds", JSON.stringify(updatedBirds))
      return updatedBirds
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
