import { SlCalender } from "react-icons/sl";
import Statistic from "../../components/Statistic";
import heroImg from '../../assets/heroImg.svg'
import { FaUsers } from "react-icons/fa6";
import { GiFamilyHouse } from 'react-icons/gi'
import { FaSearch } from 'react-icons/fa'

const statisticData = [
  {
    id: 1,
    title: '50k+ renters',
    description: 'believe in our service',
    icon: FaUsers,
  },
  {
    id: 2,
    title: '10k+ properties',
    description: 'and house ready for occupancy',
    icon: GiFamilyHouse,
  },
]

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 min-h-screen bg-soft-gray relative">
      <div className="md:col-span-6 py-10 px-4 md:px-20 space-y-0 md:space-y-4 flex flex-col justify-between">
        <div className="space-y-3 mt-2">
          <h1 className="font-bold text-4xl">Buy, rent, or sell your property easily</h1>
          <p className="text-md text-gray-800 ">
            A great platform to buy, sell, or even rent your properties without any commisions.
          </p>
        </div>
        <div className="flex pt-4 gap-x-14 mx-2 md:pt-9 md:gap-x-24">
          {statisticData.map(data => (
            <Statistic
              key={data.id}
              title={data.title}
              description={data.description}
              icon={data.icon}
            />
          ))}
        </div>
      </div>
      <div className="hidden md:block md:col-span-6 h-[36rem] relative">
        <img src={heroImg} alt="hero-section image" className="w-full h-full " />
      </div>
      <div className="md:absolute md:left-20 md:bottom-52">
        <ul className="h-16 w-80 mx-auto bg-green-primary-200 rounded-t-lg border-b-2 flex gap-x-12 font-bold text-lg items-center text-black px-4">
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
        </ul>
        <div className="h-20 w-80 mx-auto md:w-[44rem] bg-green-primary-200 flex gap-x-5 px-4 items-center justify-between">
          <div className="flex items-center justify-evenly p-2 w-full md:hidden">
            <input
              type="text"
              placeholder="Search location"
              className="outline-none flex-1 bg-transparent text-white"
            />
            <button className="bg-secondary-blue-500 py-2 px-2 rounded-xl text-white">
              <FaSearch />
            </button>
          </div>
          <div className="hidden md:block">
            <p className="text-black/60 text-sm">Location</p>
            <h4 className="font-bold text-secondary-blue-400">Barcelona,Spain</h4>
          </div>
          <div className="hidden md:block">
            <p className="text-black/60 text-sm">When</p>
            <h4 className="font-bold text-secondary-blue-400 flex items-center gap-x-2">
              Select Move-in Date
              <SlCalender className="text-sm" />
            </h4>
          </div>
          <button className="py-3 px-6 bg-secondary-blue-400 rounded-lg text-white hidden md:block">
            Browse Properties
          </button>
        </div>
      </div>
    </section>
  )
}
