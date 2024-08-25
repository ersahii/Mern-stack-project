import { createContext, useContext, useState } from "react";
// step 1 context
export const AuthContext = createContext();

// step 2 Provider 
export const AuthProvider = ({children})=>{
    const [token , setToken] = useState(localStorage.getItem("token"))
    const storeTokenToLocalStorage = (serverToken)=>{
        return localStorage.setItem("token" , serverToken);
    };
    let isLoggedIn = !!token; //if token then true else false 
    // Logout functionality
    const LogoutUser =  ()=>{
        setToken("");
        return  localStorage.removeItem("token");
    }
    return <AuthContext.Provider value={{storeTokenToLocalStorage , LogoutUser , isLoggedIn}}>
        {children}
    </AuthContext.Provider>
}

// step 3 delivery 
export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}