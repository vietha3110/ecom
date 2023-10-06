'use client' 
import { useState, useEffect } from 'react'
import { createContext, useContext } from 'react'

interface UserContextType {
    isAuth: Boolean,
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}
const authDefaultValue: UserContextType = {
    isAuth: false,
    setIsAuth: () => {}
}
const UserContext = createContext<UserContextType>(authDefaultValue); 

export function useAuth() {
    return useContext(UserContext);
}


export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuth, setIsAuth] = useState(false); 
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuth(true);
        }
    }, [setIsAuth])
    return (
        <UserContext.Provider value={{isAuth, setIsAuth}}>
            {children}
       </UserContext.Provider>
    )
} 
