import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute() {
    const {isAuthenticated} = useAuth()
    console.log(isAuthenticated)

    if(!isAuthenticated) {
         return <Navigate to='/login' replace></Navigate>
    }

    return <Outlet/>
}