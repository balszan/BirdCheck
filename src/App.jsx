import Header from "./Components/Header"
import "./style.css"
import BirdList from "./Components/BirdList"
import { createContext, useState } from "react"

export const BirdContext = createContext({
  myBirds: [],
  addBird: () => {},
})

function App() {
  const [myBirds, setMyBirds] = useState([])

  return (
    <>
      <BirdContext.Provider value={{ myBirds, setMyBirds }}>
        <Header />
        <BirdList />
      </BirdContext.Provider>
    </>
  )
}

export default App
