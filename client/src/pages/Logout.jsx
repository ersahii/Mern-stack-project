import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const Logout = ()=>{
    const {LogoutUser} = useAuth();
    const [logout , setLogout] = useState(LogoutUser);
    useEffect(()=>{
        setLogout(!LogoutUser)
        LogoutUser();
    }, [logout])
    return <Navigate to="/login"/>;
}
export default Logout;