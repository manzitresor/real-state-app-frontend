import { Link } from 'react-router-dom'
import { MdOutgoingMail } from 'react-icons/md'
import { CiLock } from 'react-icons/ci'
import loginImage from '../../assets/login-IMAGE.svg'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'
import loginSchema from '../../schema/login'


type formFields = z.infer<typeof loginSchema>

export default function Login() {
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      setError
    } = useForm<formFields>({
      defaultValues: {},
      resolver: zodResolver(loginSchema),
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
    <div className="mx-4 md:flex md:flex-col md:items-center">
      <div>
        <img src={loginImage} alt="login-image" />
      </div>
      <div className="my-8 space-y-4">
        <h1 className="text-secondary-blue text-2xl">
          Let's <span className="font-bold">Sign In</span>
        </h1>
        <p className="text-gray-500">quis nostrud exercitation ullamco laboris nisi ut</p>
      </div>
      <form className="space-y-7 my-12 w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
        <div className="border border-black flex items-center justify-evenly p-2 rounded-lg">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 outline-none"
            {...register('email', { required: 'Email is required' })}
          />
          <MdOutgoingMail className="text-3xl" />
        </div>
        {errors && <div className="text-red-600">{errors.email?.message}</div>}
        <div className="border border-black flex items-center justify-evenly p-2 rounded-lg">
          <input
            type="password"
            placeholder="Password"
            className="flex-1 outline-none"
            {...register('password')}
          />
          <CiLock className="text-3xl" />
        </div>
        {errors && <div className="text-red-600">{errors.password?.message}</div>}
        <p className="cursor-pointer text-secondary-blue hover:text-blue-400">
          <Link to="#">Forgot password?</Link>
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-primary w-full rounded-lg py-3 text-white text-lg text-center cursor-pointer"
        >
          {isSubmitting ? 'Loading...' : 'Login'}
        </button>
      </form>
      <p className="mt-10 mx-4">
        Don’t have an account?
        <Link to="/register">
          <span className="cursor-pointer text-secondary-blue mx-2 hover:text-blue-400">
            Create account
          </span>
        </Link>
      </p>
    </div>
  )
}
