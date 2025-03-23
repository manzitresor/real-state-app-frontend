import { createBrowserRouter, Navigate } from 'react-router-dom'
import Splash from '../pages/Splash'
import Login from '../pages/auth/Login'
import SignupPage from '../pages/auth/Signup'
import ProtectedRoute from './ProtectedRoute'
import Home from '../pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="/onboarding/splash" />,
      },
      {
        path: 'onboarding',
        children: [
          {
            path: 'splash',
            element: <Splash />,
          },
        ],
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <SignupPage />,
      },
      {
        element: <ProtectedRoute/>,
        children: [
          {
            path:'home',
            element: <Home/>
          }
        ]
      }
    ],
  },
])

export default router
