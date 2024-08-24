import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCrow } from "@fortawesome/free-solid-svg-icons"
import SearchBar from "./SearchBar"
import { Link, useLocation } from "react-router-dom"

export default function Header({ search, setSearch }) {
  const location = useLocation()

  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="logo">
          <FontAwesomeIcon
            icon={faCrow}
            size="2x"
            className="logo-icon"
            aria-hidden="true"
          />
          <h2>BirdCheck</h2>
        </div>
      </Link>
      {location.pathname === "/" && (
        <SearchBar
          search={search}
          setSearch={setSearch}
          className="searchbar"
        />
      )}
      <nav className="navigation">
        <Link to="/">
          <button id="home">Home</button>
        </Link>
        <Link to="/my-list">
          <button id="my-list">My List</button>
        </Link>
      </nav>
    </header>
  )
}
