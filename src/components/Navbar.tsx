import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-secondary-blue text-white px-4">
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
    </nav>
  )
}

export default Navbar
