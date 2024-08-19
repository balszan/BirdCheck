import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import BirdProfile from "./Pages/BirdProfile.jsx"
import MyList from "./Pages/MyList.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
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

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
)
