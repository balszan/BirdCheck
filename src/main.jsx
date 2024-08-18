import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import store from "./Redux/store.js"
import { Provider } from "react-redux"
import BirdProfile from "./Pages/BirdProfile.jsx"
import MyList from "./Pages/MyList.jsx"
import ReactDOM from "react-dom/client"
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
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)
