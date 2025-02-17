import { Link } from "react-router-dom"
import stairs from "../assets/image 3.svg"
import logo from "../assets/logo.png"
export default function Splash() {
  return (
    <div className="h-screen w-full relative">
      <div className="h-full">
        <img src={stairs} className="h-full w-full object-cover" />
      </div>
      <div className="absolute bottom-0 w-full h-full">
        <div className="bg-secondary-blue opacity-60 absolute inset-0"></div>
        <div className="relative h-full text-white flex flex-col justify-around items-center">
          <div>
            <img src={logo} />
            <h1 className="font-bold text-3xl">
              <span className="text-green-primary text-4xl"> Kwanda </span>Real Estate
            </h1>
          </div>
          <div>
            <Link
              to="/"
              className="bg-green-primary rounded-lg px-10 py-4 text-lg font-bold items-center"
            >
              let's start
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
