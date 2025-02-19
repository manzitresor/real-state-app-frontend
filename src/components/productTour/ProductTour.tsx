import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

interface TourContentProps {
  title: string
  description: string
  image: string,
  progress: number
}


export default function ProductTour(props:TourContentProps) {
  return (
    <div className="mt-4 mx-4 ">
      <h1 className="text-2xl font- w-2/3">{props.title}</h1>
      <p className="text-sm my-5">{props.description}</p>
      <div className="relative">
        <img src={props.image} className="w-full h-auto max-h-[60vh] object-cover rounded-3xl" />
        {/* <div className="w-28 bg-gray-400 rounded-full h-1 mb-4 dark:bg-gray-700 absolute bottom-24 left-28">
            <div className="bg-white h-1 rounded-full dark:bg-blue-500 w-[60%]"></div>
          </div> */}
        <ProgressBar progress={props.progress} className="absolute bottom-24 left-28" />
        <Link
          to="#"
          className="bg-green-primary px-16 py-4 rounded-xl text-white absolute bottom-8 left-14 right-14 text-center text-base font-bold"
        >
          Next
        </Link>
      </div>
    </div>
  )
}
