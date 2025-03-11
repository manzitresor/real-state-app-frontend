import { createBrowserRouter, Navigate } from 'react-router-dom'
import Splash from '../pages/Splash'
import ProductTourOne from '../pages/productTour/ProductTourOne'
import ProductTourTwo from '../pages/productTour/ProductTourTwo'
import ProductTourThree from '../pages/productTour/ProductTourThree'
import Login from '../pages/auth/Login'
import SignupPage from '../pages/auth/Signup'

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
          {
            path: 'productTour-1',
            element: <ProductTourOne />,
          },
          {
            path: 'productTour-2',
            element: <ProductTourTwo />,
          },
          {
            path: 'productTour-3',
            element: <ProductTourThree />,
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
    ],
  },
])

export default router
