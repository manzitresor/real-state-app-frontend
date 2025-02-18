import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function ProductTour() {
  return (
    <div>
       <nav className="flex justify-between mx-3 items-center">
        <div className="h-full w-full">
            <img src={logo} className="w-28"></img>
        </div>
        <Link to='#' className="bg-gray-200 rounded-3xl py-3 px-10">Skip</Link>
       </nav>
    </div>
  )
}
