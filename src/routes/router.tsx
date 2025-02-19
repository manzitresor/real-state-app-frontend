import { createBrowserRouter, Navigate } from 'react-router-dom'
import Splash from '../pages/Splash'
import ProductTourOne from '../pages/productTour/ProductTourOne'
import ProductTourTwo from '../pages/productTour/ProductTourTwo'
import ProductTourThree from '../pages/productTour/ProductTourThree'

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
            element: <ProductTourTwo/>
          },
          {
            path: 'productTour-3',
            element: <ProductTourThree/>
          },
        ],
      },
    ],
  },
])

export default router
