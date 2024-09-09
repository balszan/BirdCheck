import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState, useCallback, useRef } from "react"

export default function MyListItem({ bird, myBirds, setMyBirds }) {
  const [note, setNote] = useState("")
  const [addNoteButton, setAddNoteButton] = useState(true)
  const dialogRef = useRef(null)

  const updateBirds = useCallback(
    (updatedBirds) => {
      setMyBirds(updatedBirds)
      localStorage.setItem("My Birds", JSON.stringify(updatedBirds))
    },
    [setMyBirds]
  )

  useEffect(() => {
    setAddNoteButton(!bird.notes)
  }, [bird.notes])

  const handleAddNote = () => {
    const updatedBirds = myBirds.map((chosenBird) =>
      bird.sciName === chosenBird.sciName
        ? { ...chosenBird, notes: note }
        : chosenBird
    )
    updateBirds(updatedBirds)
  }

  const toggleDialog = () => {
    if (!dialogRef.current) {
      return
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal()
  }

  const deleteBird = (birdToDelete) => {
    const updatedBirds = myBirds.filter(
      (b) => b.sciName !== birdToDelete.sciName
    )
    updateBirds(updatedBirds)
  }

  function Note({ bird }) {
    return <p className="user-notes">{bird.notes}</p>
  }

  return (
    <article key={bird.subId} className="birdlist-item">
      <div className="birdlist-left">
        <img src={bird.imageUrl} alt={bird.comName}></img>
      </div>
      <div className="birdlist-right">
        <h3>{bird.comName}</h3>
        <h4>{bird.sciName}</h4>
        <p>
          Spotted on {bird.obsDt} in {bird.locName}
        </p>
        <Note bird={bird}></Note>
        <button
          id="trash"
          onClick={() => deleteBird(bird)}
          aria-label={`Delete ${bird.comName} from your list`}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button id="addNote" onClick={toggleDialog}>
          {addNoteButton ? <>Add Note</> : <>Edit Note</>}
        </button>
      </div>
      <dialog className="add-note" ref={dialogRef}>
        <form method="dialog">
          <h2>Your Notes</h2>
          <textarea
            rows="12"
            cols="30"
            placeholder="Type your note here..."
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <button id="add-note" onClick={() => handleAddNote(bird)}>
            DONE
          </button>
          <button id="close-note">X</button>
        </form>
      </dialog>
    </article>
  )
}
