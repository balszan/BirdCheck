import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCrow } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <FontAwesomeIcon icon={faCrow} size="2x" />
        <h2>BirdCheck</h2>
      </div>
    </div>
  )
}
