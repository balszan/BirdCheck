import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function BirdCard({ bird }) {
  return (
    <div key={bird.subId} className="birdcard">
      <h4>{bird.comName}</h4>
      <img src={bird.imageUrl}></img>
      <div className="birdcard-buttons">
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-button" />
          Learn More
        </button>
        <button>
          <FontAwesomeIcon icon={faCheck} className="icon-button" />
          Add
        </button>
      </div>
    </div>
  )
}
