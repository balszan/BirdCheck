import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function MyListItem({ bird }) {
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
        <button id="trash">
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button id="addNote">Add Note</button>
      </div>
    </div>
  )
}
