 import React, { useEffect, useState } from 'react'
 import { createContext } from 'react'

 
 export const authContext = createContext()


 export const AuthContextProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null )
    
    const updateUser = data=>{
        setCurrentUser(data)
    }

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])


    return <authContext.Provider value={{currentUser, updateUser}}>
        {children}
    </authContext.Provider>
 }