import { createBrowserRouter, Navigate } from 'react-router-dom'
import Splash from '../pages/Splash'
import ProductTourOne from '../pages/productTour/ProductTourOne'

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
        ],
      },
    ],
  },
])

export default router
