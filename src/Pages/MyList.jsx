import Header from "../Components/Header"
import MyListItem from "../Components/MyListItem"
import { useEffect, useState } from "react"

export default function MyList() {
  const [myBirds, setMyBirds] = useState([])

  useEffect(() => {
    const storedBirds = localStorage.getItem("My Birds")
    if (storedBirds) {
      setMyBirds(JSON.parse(storedBirds))
    }
  }, [])

  return (
    <main>
      <Header></Header>
      <section aria-label="Your added birds">
        {myBirds ? (
          myBirds.map((bird) => {
            return (
              <>
                <MyListItem
                  key={bird.sciName}
                  bird={bird}
                  myBirds={myBirds}
                  setMyBirds={setMyBirds}
                />
              </>
            )
          })
        ) : (
          <p className="information">No Birds added yet.</p>
        )}
      </section>
    </main>
  )
}
