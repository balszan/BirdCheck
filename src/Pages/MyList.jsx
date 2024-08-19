import Header from "../Components/Header"
import MyListItem from "../Components/MyListItem"

export default function MyList({ myBirds }) {
  return (
    <>
      <Header></Header>
      {myBirds.map((bird) => {
        return <MyListItem key={bird.subId} />
      })}
    </>
  )
}
