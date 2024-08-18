export default function BirdCard({ bird }) {
  return (
    <div key={bird.subId} className="birdcard">
      <h4>{bird.comName}</h4>
      <img src={bird.imageUrl}></img>
      <div className="birdcard-input">
        <label for="seen">I've seen this one!</label>
        <input type="checkbox" name="seen"></input>
      </div>
    </div>
  )
}
