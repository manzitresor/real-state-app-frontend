import Navbar from '../components/Navbar'
import heroImg from '../assets/heroImg.svg'
import { FaUsers } from 'react-icons/fa'
import { FaKey } from 'react-icons/fa6'
import { SlCalender } from 'react-icons/sl'

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <section className="grid grid-cols-12 h-screen bg-soft-gray relative">
        <div className="col-span-6  py-10 px-20 space-y-4 flex flex-col justify-between">
          <div className='space-y-3 mt-2'>
            <h1 className="font-bold text-4xl">Buy, rent, or sell your property easily</h1>
            <p className="text-md text-gray-800 ">
              A great platform to buy, sell, or even rent your properties without any commisions.
            </p>
          </div>
          {/* Properties and renters section to go down and this should be component in future */}
          <div className="flex gap-x-24 pt-9">
            <div>
              <div className="h-16 w-16 relative rounded-full bg-green-primary-200 flex items-center justify-center">
                <FaUsers className="text-white text-3xl" />
                <div className="h-4 w-4 bg-secondary-blue-400 rounded-sm flex items-center justify-center absolute bottom-1 right-1">
                  <FaKey className="text-white w-2 h-2" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-primary-600">50k+ renters</h4>
                <p className="text-black/70 text-base">believe in our service</p>
              </div>
            </div>
            <div>
              <div className="h-16 w-16 relative rounded-full bg-green-primary-200 flex items-center justify-center">
                <FaUsers className="text-white text-3xl" />
                <div className="h-4 w-4 bg-secondary-blue-400 rounded-sm flex items-center justify-center absolute bottom-1 right-1">
                  <FaKey className="text-white w-2 h-2" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-primary-600">50k+ renters</h4>
                <p className="text-black/70 text-base">believe in our service</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 h-[36rem] relative">
          <img src={heroImg} alt="hero-section image" className="w-full h-full " />
        </div>
        <ul className="h-16 w-80 bg-green-primary-200 absolute left-20 bottom-72 rounded-t-lg border-b-2 flex gap-x-12 font-bold text-lg items-center text-black px-4">
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
        </ul>
        <div className="h-20 w-[44rem] bg-green-primary-200 absolute left-20 bottom-52 flex gap-x-5 px-4 items-center justify-between">
          <div>
            <p className="text-black/60 text-sm">Location</p>
            <h4 className="font-bold text-secondary-blue-400">Barcelona,Spain</h4>
          </div>
          <div>
            <p className="text-black/60 text-sm">When</p>
            <h4 className="font-bold text-secondary-blue-400 flex items-center gap-x-2">
              Select Move-in Date
              <SlCalender className="text-sm" />
            </h4>
          </div>
          <button className="py-3 px-6 bg-secondary-blue-400 rounded-lg text-white">
            Browse Properties
          </button>
        </div>
      </section>
    </main>
  )
}
