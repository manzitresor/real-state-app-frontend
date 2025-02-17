import { createBrowserRouter, Navigate } from 'react-router-dom'
import Splash from '../pages/Splash'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to='/onboarding/splash' />,
      },
      {
        path:'onboarding',
        children: [
          {
            path:'splash',
            element: <Splash/>
          }
        ]
      }
    ],
  },
])

export default router
