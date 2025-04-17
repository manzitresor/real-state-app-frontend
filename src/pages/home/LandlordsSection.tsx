import { FaCirclePlay } from 'react-icons/fa6'
import { CiHome } from 'react-icons/ci'

export default function LandlordsSection() {
  return (
    <section className="bg-secondary-blue-600 h-full w-full text-white px-12 md:px-32 py-12">
      <div className="md:flex md:justify-between md:gap-x-40 md:flex-nowrap">
        <h2 className="font-bold text-3xl md:text-4xl  md:w-1/2">
          We make it easy for <span className="text-green-primary-400">tenants</span> and{' '}
          <span className="text-green-primary-400">landlords</span>.
        </h2>
        <p className="text-base md:w-1/2 text-gray-300">
          Whether it’s selling your current home, getting financing, or buying a new home, we make
          it easy and efficient. The best part? you’ll save a bunch of money and time with our
          services.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4 mt-14">
        <div className="bg-secondary-blue-400 px-4 py-4 flex gap-x-2 rounded-md">
          <div>
            <div className="h-10 w-10 border-2 border-green-primary-200 rounded-full flex items-center justify-center mt-3">
              <FaCirclePlay />
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-2xl">Virtual home tour</h4>
            <p className="text-gray-300 text-base">
              You can communicate directly with landlords and we provide you with virtual tour
              before you buy or rent the property.
            </p>
          </div>
        </div>
        <div className="bg-white text-secondary-blue-400 px-4 py-4 flex gap-x-2 rounded-md">
          <div>
            <div className="h-10 w-10 border-2 border-green-primary-200 rounded-full flex items-center justify-center mt-3">
              <CiHome />
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-2xl">Find the best deal</h4>
            <p className="text-base">
              Browse thousands of properties, save your favorites and set up search alerts so you
              don’t miss the best home deal!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-green-primary-400 pt-12 grid grid-cols-2 gap-y-7 md:grid-cols-3">
        <div>
          <h1 className="text-4xl font-bold">7.4%</h1>
          <p className="text-gray-300">Property Return Rate</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">3,856</h1>
          <p className="text-gray-300">Property in Sell & Rent</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">2,540</h1>
          <p className="text-gray-300">Daily Completed Transactions</p>
        </div>
      </div>
    </section>
  )
}
