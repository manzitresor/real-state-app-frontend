import { Link } from 'react-router-dom'
import { MdOutgoingMail } from 'react-icons/md'
import { CiLock } from 'react-icons/ci'
import loginImage from '../../assets/login-IMAGE.svg'

export default function Login() {
  return (
    <div className="mx-4">
      <div>
        <img src={loginImage} alt="login-image" />
      </div>
      <div className="my-8 space-y-4">
        <h1 className="text-secondary-blue text-2xl">
          Let's <span className="font-bold">Sign In</span>
        </h1>
        <p className='text-gray-500'>quis nostrud exercitation ullamco laboris nisi ut</p>
      </div>
      <form className="space-y-7 my-12">
        <div className="border border-black flex items-center justify-evenly p-2 rounded-lg">
          <input type="email" placeholder="Email" className="flex-1 outline-none" />
          <MdOutgoingMail className="text-3xl" />
        </div>
        <div className="border border-black flex items-center justify-evenly p-2 rounded-lg">
          <input type="password" placeholder="Password" className="flex-1 outline-none" />
          <CiLock className="text-3xl" />
        </div>
        <p className="cursor-pointer hover:text-secondary-blue">
          <Link to="#">Forgot password?</Link>
        </p>
        <button
          type="submit"
          className="bg-green-primary w-full rounded-lg py-3 text-white text-lg text-center cursor-pointer"
        >
          Login
        </button>
      </form>
      <p className="mt-10 mx-4">
        Don’t have an account?{' '}
        <Link to="#">
          <span className='cursor-pointer hover:text-secondary-blue'>Register</span>
        </Link>
      </p>
    </div>
  )
}
