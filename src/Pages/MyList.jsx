import { BirdContext } from "../App"
import Header from "../Components/Header"
import MyListItem from "../Components/MyListItem"
import { useContext } from "react"

export default function MyList() {
  const { myBirds, setMyBirds } = useContext(BirdContext)
  return (
    <>
      <Header></Header>
      {myBirds.map((bird) => {
        return <MyListItem key={bird.sciName} bird={bird} />
      })}
    </>
  )
}
