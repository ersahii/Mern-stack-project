import { createContext, useContext } from "react";
// step 1 context
export const AuthContext = createContext();

// step 2 Provider 
export const AuthProvider = ({children})=>{
    const storeTokenToLocalStorage = (serverToken)=>{
        return localStorage.setItem("token" , serverToken);
    };
    return <AuthContext.Provider value={{storeTokenToLocalStorage}}>
        {children}
    </AuthContext.Provider>
}

// step 3 delivery 
export const useAuth = ()=>{
    const authContextValue =useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}