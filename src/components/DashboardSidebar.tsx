import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaUserEdit } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { MdPostAdd } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import { IoMdLogOut } from 'react-icons/io'
import { IoMdSettings } from 'react-icons/io'

export default function DashboardSidebar() {
  return (
    <div className="bg-secondary-blue-400 h-screen fixed">
      <div className="flex items-center text-lg font-bold text-soft-gray mr-4">
        <img src={logo} alt="kwanda-estate-logo" width={64} />
        <span className="text-green-primary-400">Kwanda </span>- Estate
      </div>
      <ul className="text-white flex flex-col gap-y-4 mx-3 mt-10">
        <li className="hover:text-green-primary-100 flex items-center gap-x-2">
          <FaHome className="text-green-primary-200 text-xl" />
          <Link to="#">Home</Link>
        </li>
        <li className="hover:text-green-primary-100 flex items-center gap-x-2">
          <MdPostAdd className="text-green-primary-200 text-xl" />
          <Link to="/dashboard/post">Posts</Link>
        </li>
        <li className="hover:text-green-primary-100 flex items-center gap-x-2">
          <FaMessage className="text-green-primary-200 text-xl" />
          <Link to="#">Message</Link>
        </li>
        <li className="hover:text-green-primary-100 flex items-center gap-x-2">
          <FaUserEdit className="text-green-primary-200 text-xl" />
          <Link to="#">Profile</Link>
        </li>
      </ul>
      <ul className="text-white flex flex-col gap-y-4 mx-3 mt-24">
        <li className="hover:text-green-primary-100 flex items-center gap-x-2">
          <IoMdSettings className="text-green-primary-200 text-xl" />
          <Link to="/login" className="text-white">
            Settings
          </Link>
        </li>
        <li className="hover:text-green-primary-100 flex items-center gap-x-2">
          <IoMdLogOut className="text-green-primary-200 text-xl" />
          <Link to="/login" className="text-white">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}
