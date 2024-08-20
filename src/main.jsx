import { createRoot } from "react-dom/client"
import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import BirdProfile from "./Pages/BirdProfile.jsx"
import MyList from "./Pages/MyList.jsx"
import PageNotFound from "./Pages/PageNotFound.jsx"

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
