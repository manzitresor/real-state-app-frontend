import { CiLock } from 'react-icons/ci';
import { MdKeyboardArrowLeft, MdOutgoingMail } from 'react-icons/md';
import { CiUser } from 'react-icons/ci'
// import { useForm } from 'react-hook-form';

// interface formFields {
//   fullName: string;
//   email: string;
//   password: string;
// }
export default function Register() {
//  const form: formFields = useForm()

  return (
    <div>
      <div className="bg-gray-300 rounded-full my-5 mx-2 w-11 h-11 flex items-center justify-center">
        <MdKeyboardArrowLeft className="text-2xl text-secondary-blue" />
      </div>
      <div className="mx-4 flex flex-col items-center">
        
        <div className="my-8 space-y-4">
          <h1 className="text-secondary-blue text-2xl">
            Create your <span className="font-bold">account</span>
          </h1>
          <p className="text-gray-500">quis nostrud exercitation ullamco laboris nisi ut</p>
        </div>
        <form className="space-y-7 my-12 w-full max-w-sm">
          <div className="border border-black flex items-center justify-evenly p-2 rounded-lg">
            <input type="text" placeholder="Full name" className="flex-1 outline-none" />
            <CiUser className="text-3xl" />
          </div>
          <div className="border border-black flex items-center justify-evenly p-2 rounded-lg">
            <input type="email" placeholder="Email" className="flex-1 outline-none" />
            <MdOutgoingMail className="text-3xl" />
          </div>
          <div className="border border-black flex items-center justify-evenly p-2 rounded-lg">
            <input type="password" placeholder="Password" className="flex-1 outline-none" />
            <CiLock className="text-3xl" />
          </div>
          <div className="border border-black flex items-center justify-evenly p-2 rounded-lg">
            <input type="password" placeholder="Comfirm-Password" className="flex-1 outline-none" />
            <CiLock className="text-3xl" />
          </div>
          <button
            type="submit"
            className="bg-green-primary w-full rounded-lg py-3 text-white text-lg text-center cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
