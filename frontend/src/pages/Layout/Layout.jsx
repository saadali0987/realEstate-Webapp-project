import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Home from '../Home/Home'
import "./layout.css"
import { Outlet } from 'react-router-dom'
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

export default Layout