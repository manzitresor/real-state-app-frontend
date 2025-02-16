import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Splash from '../pages/Splash'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'splash',
        element: <Splash />,
      },
    ],
  },
])

export default router
