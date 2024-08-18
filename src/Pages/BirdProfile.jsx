import { Outlet } from "react-router-dom"
import Header from "../Components/Header"

export default function BirdProfile() {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  )
}
