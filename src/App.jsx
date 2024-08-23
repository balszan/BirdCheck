import Header from "./Components/Header"
import BirdList from "./Components/BirdList"
import "./style.css"
import { useState } from "react"

function App() {
  const [search, setSearch] = useState("")

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <BirdList search={search} setSearch={setSearch} />
    </>
  )
}

export default App
