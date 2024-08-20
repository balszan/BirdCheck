import Header from "../Components/Header"
import MyListItem from "../Components/MyListItem"

export default function MyList() {
  const myBirds = JSON.parse(localStorage.getItem("My Birds"))
  return (
    <>
      <Header></Header>
      {myBirds ? (
        myBirds.map((bird) => {
          return <MyListItem key={bird.sciName} bird={bird} />
        })
      ) : (
        <p className="information">No Birds added yet.</p>
      )}
    </>
  )
}
