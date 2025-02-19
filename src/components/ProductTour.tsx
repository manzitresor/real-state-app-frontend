import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import tourOneImg from '../assets/Rectangle 6.png'

export default function ProductTour() {
  return (
    <div className="mx-4 h-screen">
      <nav className="flex justify-between mx-3 items-center">
        <div className="h-full w-full">
          <img src={logo} className="w-28"></img>
        </div>
        <Link to="#" className="bg-gray-200 rounded-3xl py-3 px-10">
          Skip
        </Link>
      </nav>
      <div className="mt-4">
        <h1 className="text-2xl font- w-2/3">Find best place to stay in good price</h1>
        <p className="text-sm my-5">
          brand new house in an exclusive gated community in Kanombe, featuring 4 bedrooms and 3 and
          a half bathrooms,
        </p>
        <div className="relative ">
          <img src={tourOneImg} className="w-full h-auto max-h-[60vh] object-cover rounded-3xl" />
          <div className="w-28 bg-gray-400 rounded-full h-1 mb-4 dark:bg-gray-700 absolute bottom-24 left-28">
            <div className="bg-white h-1 rounded-full dark:bg-blue-500 w-[60%]"></div>
          </div>
          <Link
            to="#"
            className="bg-green-primary px-16 py-4 rounded-xl text-white absolute bottom-8 left-14 right-14 text-center text-base font-bold"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  )
}
