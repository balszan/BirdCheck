import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"
import { fetchBirds } from "../Services/eBirdApi"

export default function SearchBar({ search, setSearch }) {
  const handleSearch = async (search) => {
    setSearch(search)
    fetchBirds(search)
  }

  return (
    <div className="searchbar">
      <input
        type="text"
        className="searchbar-input"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      ></input>
      <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden="true" />
    </div>
  )
}
