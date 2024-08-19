import Header from "../Components/Header"
import { useLocation } from "react-router-dom"

export default function BirdProfile() {
  const location = useLocation()
  const bird = location.state?.bird
  return (
    <>
      <Header></Header>
      <h4>{bird.comName}</h4>
      <img src={bird.imageUrl}></img>
    </>
  )
}
