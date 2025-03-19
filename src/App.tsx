import { RouterProvider } from "react-router-dom"
import router from "./routes/router"
import { Toaster } from "react-hot-toast"
import AuthProvider from "./authProvider/authProvider"

function App() {
  return (
    <>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </AuthProvider>
    </>
  )
}

export default App
