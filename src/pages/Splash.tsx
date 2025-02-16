import { Link } from "react-router-dom"
import stairs from "../assets/image 3.svg"
import logo from "../assets/logo.png"
export default function Splash() {
  return (
    <div className="h-screen w-full relative">
      <div className="h-full">
        <img src={stairs} className="h-full w-full object-cover"/>
      </div>
      <div className="absolute bottom-0 w-full h-full">
        <div className="bg-secondary-blue opacity-60 absolute inset-0"></div>
        <div className="relative h-full text-white">
            <div>
              <img src={logo} />
            </div>
            <h1>Kwanda Real Estate</h1>
              <Link to="/">let's start</Link>
            </div>
        </div>
    </div>
  )
}
