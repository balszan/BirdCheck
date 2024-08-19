import Header from "../Components/Header"

export default function BirdProfile({ bird }) {
  return (
    <>
      <Header></Header>
      <h4>{bird.comName}</h4>
      <img src={bird.imageUrl}></img>
    </>
  )
}
