import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

interface TourContentProps {
  title: string
  description: string
  image: string
  imgdesktop: string
  progress: number
  path: string
}


export default function ProductTour(props:TourContentProps) {
  return (
    <div className="relative mn-h-screeni">
      {/* Mobile design */}
      <div className="mt-4 mx-4 md:hidden">
        <h1 className="text-2xl">{props.title}</h1>
        <p className="text-sm my-5">{props.description}</p>
        <div className="relative">
          <img src={props.image} className="w-full h-auto max-h-[60vh] object-cover rounded-3xl" />
          <ProgressBar progress={props.progress} className="absolute bottom-24 left-28" />
          <Link
            to={props.path}
            className="bg-green-primary px-16 py-4 rounded-xl text-white absolute bottom-8 left-14 right-14 text-center text-base font-bold"
          >
            Next
          </Link>
        </div>
      </div>
      {/* Desktop design */}
      <div
        className="hidden md:block min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${props.imgdesktop})` }}
      >
        <div className="md:text-center bg-black/50 min-h-screen text-gray-100 flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-4xl">{props.title}</h1>
          <p className="text-sm my-5 md:text-lg md:max-w-2xl md:mx-auto">{props.description}</p>
          <ProgressBar progress={props.progress} className="mb-8" />
          <Link
            to={props.path}
            className="bg-green-primary px-16 py-4 rounded-xl text-white text-base font-bold hover:bg-green-600 transition-colors inline-block"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  )
}
