import { Link } from "react-router-dom"
import stairs from "../assets/image 3.svg"
import logo from "../assets/logo.png"
export default function Splash() {
  return (
    <div>
      <img src={stairs}/>
      <div>
          <img src={logo}/> 
          <h1>Kwanda Real Estate</h1> 
      </div>
      <Link to="/">let's start</Link>
    </div>
  )
}
