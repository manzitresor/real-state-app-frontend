import { createBrowserRouter, Navigate } from 'react-router-dom'
import Splash from '../pages/Splash'
import Login from '../pages/auth/Login'
import SignupPage from '../pages/auth/Signup'
import ProtectedRoute from './ProtectedRoute'
import Home from '../pages/home/Home'
import Dashboard from '../pages/Dashboard'

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
        path: 'home',
        element: <Home/>
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
      {
        element: <ProtectedRoute/>,
        children: [
          {
            path:'dashboard',
            element: <Dashboard/>
          }
        ]
      }
    ],
  },
])

export default router
