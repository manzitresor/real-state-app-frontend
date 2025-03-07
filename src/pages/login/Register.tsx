import { CiLock } from 'react-icons/ci';
import { MdKeyboardArrowLeft, MdOutgoingMail } from 'react-icons/md';
import { CiUser } from 'react-icons/ci'
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const registerSchema = z.object({
  fullName: z.string().nonempty(),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8)
})

type formFields = z.infer<typeof registerSchema>

export default function Register() {
 const {
   register,
   handleSubmit,
   formState: { errors, isSubmitting },
   setError
 } = useForm<formFields>({
  defaultValues: {},
   resolver: zodResolver(registerSchema),
 })

 const onSubmit: SubmitHandler<formFields> = async(data) => {
  try {
        console.log(data)
       await new Promise(resolve => setTimeout(resolve, 2000)) 
  } catch(error){
    setError('root',{ message: 'Failed to send data'})
    console.log(error)
  }
 }

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
        <form className="space-y-7 my-12 w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
          <div className="border border-black flex items-center justify-evenly p-2 rounded-lg">
            <input
              type="text"
              {...register('fullName', { required: 'Full name is required' })}
              placeholder="Full name"
              className="flex-1 outline-none"
            />
            <CiUser className="text-3xl" />
          </div>
          {errors && <div className="text-red-600">{errors.fullName?.message}</div>}
          <div className="border border-black flex items-center justify-evenly p-2 rounded-lg">
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              placeholder="Email"
              className="flex-1 outline-none"
            />
            <MdOutgoingMail className="text-3xl" />
          </div>
          {errors && <div className="text-red-600">{errors.email?.message}</div>}
          <div className="border border-black flex items-center justify-evenly p-2 rounded-lg">
            <input
              type="password"
              {...register('password')}
              placeholder="Password"
              className="flex-1 outline-none"
            />
            <CiLock className="text-3xl" />
          </div>
          {errors && <div className="text-red-600">{errors.password?.message}</div>}
          <div className="border border-black flex items-center justify-evenly p-2 rounded-lg">
            <input
              type="password"
              placeholder="Comfirm-Password"
              className="flex-1 outline-none"
              {...register('confirmPassword')}
            />
            <CiLock className="text-3xl" />
          </div>
          {errors && <div className="text-red-600">{errors.confirmPassword?.message}</div>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-primary w-full rounded-lg py-3 text-white text-lg text-center cursor-pointer"
          >
            {isSubmitting ? 'Loading...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  )
}
