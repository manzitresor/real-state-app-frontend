import { FaKey } from 'react-icons/fa'
import { LiaBuyNLarge } from 'react-icons/lia'
import { LuPentagon } from 'react-icons/lu'
import { FaSearch } from 'react-icons/fa'

export default function ExploreSection() {
  return (
    <section className="w-full min-h-screen mt-20 bg-soft-gray py-10">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl">Based on your location</h1>
          <p className="text-gray-500 text-base">some of our picked properties near you location</p>
        </div>
        <div className="flex justify-between mx-16 text-secondary-blue-400 mt-10">
          {/* Categories */}
          <ul className="bg-green-primary-200 flex gap-x-10 px-4 py-4 rounded-lg ">
            <li className="bg-white px-2 rounded-lg flex items-center gap-x-1 cursor-pointer">
              <FaKey className="text-sm" />
              <span>Rent</span>
            </li>
            <li className="flex items-center gap-x-1 cursor-pointer">
              <LiaBuyNLarge />
              <span>Buy</span>
            </li>
            <li className="flex items-center gap-x-1 cursor-pointer">
              <LuPentagon />
              <span>Sell</span>
            </li>
          </ul>
          <div className="bg-green-primary-200 flex items-center gap-x-2 px-4 py-4 rounded-lg">
            <FaSearch />
            <input
              type="text"
              placeholder="Search......"
              className="outline-none bg-transparent flex-1"
            />
          </div>
        </div>
      </div>

      <div></div>
    </section>
  )
}
