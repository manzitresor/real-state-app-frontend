import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';
import { useState } from 'react';
import { MdMenuOpen } from 'react-icons/md'
import { IoCloseSharp } from 'react-icons/io5'

function Navbar() {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const toggleMenu =()=> {
    setIsMenuOpen(prev => !prev)
  }


  return (
    <>
      <nav className=" bg-secondary-blue-400 text-white px-4">
        <div className="flex justify-end md:hidden py-2 font-bold text-3xl text-green-primary-400">
          <button onClick={toggleMenu}>
            <MdMenuOpen />
          </button>
        </div>
        <div className="hidden md:flex justify-between items-center">
          <ul className="flex gap-x-6 items-center">
            <li className="flex items-center text-lg font-bold text-soft-gray mr-4">
              <img src={logo} alt="kwanda-estate-logo" width={64} />
              <span className="text-green-primary-400">Kwanda </span>- Estate
            </li>
            <li className="hover:text-green-primary-100">
              <Link to="#">Rent</Link>
            </li>
            <li className="hover:text-green-primary-100">
              <Link to="#">Buy</Link>
            </li>
            <li className="hover:text-green-primary-100">
              <Link to="#">Sell</Link>
            </li>
          </ul>
          <div className="flex gap-x-4">
            <Link to="/login">
              <span className="border border-green-primary-400 py-2 px-4 rounded-lg">Login</span>
            </Link>
            <Link to="/signup">
              <span className="border border-green-primary-400 py-2 px-4 rounded-lg">Signup</span>
            </Link>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={toggleMenu}></div>
      )}

      {isMenuOpen && (
        <div className="md:hidden absolute top-0 right-0 w-2/3 h-full z-50 py-4 flex flex-col gap-y-4 bg-secondary-blue-400 rounded-bl-xl px-3 text-white">
          <button
            className="absolute right-4 top-2 text-2xl text-green-primary-400"
            onClick={toggleMenu}
          >
            <IoCloseSharp/>
          </button>
          <ul className="flex flex-col gap-y-4 items-center">
            <li className="flex items-center text-lg font-bold text-soft-gray">
              <img src={logo} alt="kwanda-estate-logo" width={48} />
              <span className="text-green-primary-400">Kwanda </span>- Estate
            </li>
            <li className="hover:text-green-primary-100">
              <Link to="#">Rent</Link>
            </li>
            <li className="hover:text-green-primary-100">
              <Link to="#">Buy</Link>
            </li>
            <li className="hover:text-green-primary-100">
              <Link to="#">Sell</Link>
            </li>
          </ul>
          <div className="flex flex-col gap-y-2 items-center mt-2">
            <Link to="/login" className="w-full">
              <span className="border border-green-primary-400 py-2 px-4 rounded-lg block text-center">
                Login
              </span>
            </Link>
            <Link to="/signup" className="w-full">
              <span className="border border-green-primary-400 py-2 px-4 rounded-lg block text-center">
                Signup
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
