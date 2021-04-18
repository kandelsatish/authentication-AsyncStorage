import React,{createContext,useState} from 'react'
import App from '../App';

export const Authentication=createContext();

export default function AuthProvider({children}) {
    const [user,setUser]=useState("admin");
    const [pass,setPass]=useState("admin123");
    const [isloading,setIsLoading]=useState(true);
    return (
        <Authentication.Provider value={{
            user,
            pass,
        }}>
            {children}
        </Authentication.Provider>
    )
}

