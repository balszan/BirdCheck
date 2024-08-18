import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCrow } from "@fortawesome/free-solid-svg-icons"
import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <FontAwesomeIcon icon={faCrow} size="2x" className="logo-icon" />
        <h2>BirdCheck</h2>
      </div>
      <SearchBar></SearchBar>
      <div className="navigation">
        <Link to="/">
          <button id="home">Home</button>
        </Link>
        <Link to="/my-list">
          <button id="home">My List</button>
        </Link>
      </div>
    </div>
  )
}
