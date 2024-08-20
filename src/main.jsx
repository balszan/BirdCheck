import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import BirdProfile from "./Pages/BirdProfile.jsx"
import MyList from "./Pages/MyList.jsx"
import PageNotFound from "./Pages/PageNotFound.jsx"
import { BirdContext } from "./App.jsx"
import { useState } from "react"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bird/:id",
    element: <BirdProfile />,
  },
  {
    path: "/my-list",
    element: <MyList />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
])

function Main() {
  const [myBirds, setMyBirds] = useState([])

  return (
    <BirdContext.Provider value={{ myBirds, setMyBirds }}>
      <RouterProvider router={router} />
    </BirdContext.Provider>
  )
}
createRoot(document.getElementById("root")).render(<Main />)
