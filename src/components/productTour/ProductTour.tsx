import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

interface TourContentProps {
  title: string
  description: string
  image: string
  progress: number
  path: string
}


export default function ProductTour(props:TourContentProps) {
  return (
    <div className="mt-4 mx-4 ">
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
  )
}
