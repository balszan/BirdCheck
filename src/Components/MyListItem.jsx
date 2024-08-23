import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState, useRef } from "react"

export default function MyListItem({ bird, myBirds, setMyBirds }) {
  const [note, setNote] = useState("")
  const [buttonOption, setButtonOption] = useState("Add Note")
  const dialogRef = useRef(null)

  useEffect(() => {
    setMyBirds(JSON.parse(localStorage.getItem("My Birds")))
  }, [])

  useEffect(() => {
    localStorage.setItem("My Birds", JSON.stringify(myBirds))
  }, [myBirds])

  const handleAddNote = () => {
    setMyBirds((prevBirds) =>
      prevBirds.map((chosenBird) =>
        bird.sciName === chosenBird.sciName
          ? { ...chosenBird, notes: note }
          : chosenBird
      )
    )
    setButtonOption("Edit note")
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
    localStorage.setItem("My Birds", JSON.stringify(updatedBirds))
    setMyBirds(updatedBirds)
  }

  function Note({ bird }) {
    return <p className="user-notes">{bird.notes}</p>
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
        <Note bird={bird}></Note>
        <button id="trash" onClick={() => deleteBird(bird)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button id="addNote" onClick={toggleDialog}>
          {buttonOption}
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
    </div>
  )
}
