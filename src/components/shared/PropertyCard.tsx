import { FaRegHeart } from 'react-icons/fa6'
import { MdOutlineBed } from 'react-icons/md'
import { BiBath } from 'react-icons/bi'
import { HiSquare3Stack3D } from 'react-icons/hi2'
import { PropertyList } from '../../types/interface'

export default function PropertyCard({bathRooms, beds, description, image, name, price, size}:PropertyList) {
  return (
    <>
      <div className="mt-7">
        <div className="bg-white shadow-lg w-80 h-96 rounded-lg">
          <div className="w-full h-1/2 rounded-t-lg">
            <img src={image} alt="card-one-image" className="h-full w-full" />
          </div>
          <div className="mx-4 my-4 space-y-2">
            <div className="flex justify-between">
              <h2 className="text-2xl text-secondary-blue-300 font-bold">
                {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}{' '}
                <span className="text-lg text-black/50 font-normal">/month</span>
              </h2>
              <div className="h-10 w-10 border-2 border-green-primary-200 rounded-full flex items-center justify-center">
                <FaRegHeart />
              </div>
            </div>
            <h2 className="font-bold text-2xl">{name}</h2>
            <p className="text-black/50">{description}</p>
            <div className="flex gap-x-2 pt-3">
              <p className="flex gap-x-2 items-center">
                <MdOutlineBed className="text-lg text-green-primary-400" />
                {beds} Beds
              </p>
              <p className="flex gap-x-2 items-center">
                <BiBath className="text-lg text-green-primary-400" />
                {bathRooms} Bathrooms
              </p>
              <p className="flex gap-x-2 items-center">
                <HiSquare3Stack3D className="text-lg text-green-primary-400" />
                {size}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
