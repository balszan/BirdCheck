import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"

export default function MyListItem({ bird, myBirds, setMyBirds }) {
  useEffect(() => {
    setMyBirds(JSON.parse(localStorage.getItem("My Birds")))
  }, [])

  const deleteBird = (birdToDelete) => {
    const updatedBirds = myBirds.filter(
      (b) => b.sciName !== birdToDelete.sciName
    )
    localStorage.setItem("My Birds", JSON.stringify(updatedBirds))
    setMyBirds(updatedBirds)
  }

  return (
    <div key={bird.subId} className="birdlist-item">
      <div className="birdlist-left">
        <img src={bird.imageUrl}></img>
      </div>
      <div className="birdlist-right">
        <h3>{bird.comName}</h3>
        <h4>{bird.sciName}</h4>
        <p>
          Spotted on {bird.obsDt} in {bird.locName}
        </p>
        <button id="trash" onClick={() => deleteBird(bird)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button id="addNote">Add Note</button>
      </div>
    </div>
  )
}
