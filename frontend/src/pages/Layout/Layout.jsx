import React, { useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Home from '../Home/Home'
import "./layout.css"
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { authContext } from '../../context/authContext'
const Layout = () => {
    return (
        <div className='flex flex-col h-screen max-w-[640px] md:max-w-[768px] lg:max-w-[1288px] mx-auto pl-[20px] pr-[20px]'>
            <div>
                <Navbar />
            </div>

            <div className=' box '>
                <Outlet />
            </div>
        </div>
    )
}

const AuthLayout = () => {
    const {currentUser} = useContext(authContext)
    const navigate = useNavigate()
    if(!currentUser){
        return <Navigate to="/login" />
    }

    return (
        <div className='flex flex-col h-screen max-w-[640px] md:max-w-[768px] lg:max-w-[1288px] mx-auto pl-[20px] pr-[20px]'>
            <div>
                <Navbar />
            </div>

            <div className=' box '>
                <Outlet />
            </div>
        </div>
    )
}

export {Layout, AuthLayout}