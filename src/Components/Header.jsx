import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCrow } from "@fortawesome/free-solid-svg-icons"
import SearchBar from "./SearchBar"
import { Link, useLocation } from "react-router-dom"

export default function Header({ search, setSearch }) {
  const location = useLocation()

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="logo">
          <FontAwesomeIcon icon={faCrow} size="2x" className="logo-icon" />
          <h2>BirdCheck</h2>
        </div>
      </Link>
      {location.pathname === "/" && (
        <SearchBar search={search} setSearch={setSearch} />
      )}
      <div className="navigation">
        <Link to="/">
          <button id="home">Home</button>
        </Link>
        <Link to="/my-list">
          <button id="my-list">My List</button>
        </Link>
      </div>
    </div>
  )
}
