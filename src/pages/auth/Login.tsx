import { Link, useNavigate } from 'react-router-dom'
import { MdOutgoingMail } from 'react-icons/md'
import { CiLock } from 'react-icons/ci'
import loginImage from '../../assets/login-IMAGE.svg'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'
import loginSchema from '../../schema/login'
import axios from 'axios'
import { useAuth } from '../../hooks/useAuth'
import BackButton from '../../components/BackButton'


type formFields = z.infer<typeof loginSchema>

export default function Login() {
  const navigate = useNavigate()
  const {setToken} = useAuth()
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
           const response = await axios.post('http://localhost:3000/auth',{
            email: data.email,
            password: data.password
           })

           if (response.data && response.data.access_token) {
             setToken(response.data.access_token)
             console.log('authenticated and directed to another page')
             navigate('/home')
           } else {
             setError('root', { message: 'Invalid response from the server' })
           }

      } catch(error){
        if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401) {
          setError('root', { message: 'Invalid email or password' })
        } else {
          setError('root', {
            message: `Server error: ${error.response.data?.message || error.message}`,
          })
        }
      } else {
        setError('root', { message: 'Failed to connect to server' })
      }
      console.error(error)
      }
    }
 


  return (
    <div>
      <BackButton />
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
          {errors && <div className="text-red-600">{errors.root?.message}</div>}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-primary-400 w-full rounded-lg py-3 text-white text-lg text-center cursor-pointer"
          >
            {isSubmitting ? 'Loading...' : 'Login'}
          </button>
        </form>
        <p className="mt-10 mx-4">
          Don’t have an account?
          <Link to="/signup">
            <span className="cursor-pointer text-secondary-blue mx-2 hover:text-blue-400">
              Create account
            </span>
          </Link>
        </p>
      </div>
    </div>
  )
}
