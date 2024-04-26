import React, { useState } from 'react'
import logo from "../../assets/logoo.png"
import menu from "../../assets/menu.png"
import { BsHouseCheck } from "react-icons/bs";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='flex justify-between h-[100px] items-center'>
        <div className='flex flex-[3]  gap-[50px] items-center'>
            <a href="/" className='hover:scale-[1.05] ease-in duration-100 flex items-center font-bold  text-[20px] gap-[10px]'>
                {/* <img className='w-[28px]' src={logo} alt="logo" /> */}
                <BsHouseCheck className='w-8 h-8' />
                <span className='md:hidden lg:inline'>PrimePropertyPortal</span>
            </a>
            <a className='hover:scale-[1.05] hidden md:inline ease-in duration-100' href="">Home</a>
            <a className='hover:scale-[1.05] hidden md:inline ease-in duration-100' href="">About</a>
            <a className='hover:scale-[1.05] hidden md:inline ease-in duration-100' href="">Contact</a>
            <a className='hover:scale-[1.05] hidden md:inline ease-in duration-100' href="">Agents</a>
        </div>


        <div className='flex-[2]  flex items-center justify-end h-full lg:bg-teal-300'>
            <a className=' hidden md:inline hover:scale-[1.05] ease-in duration-100 py-[12px] px-[24px] m-[20px]' href="">Sign Up</a>
            <a className=' hidden md:inline py-[12px] px-[24px] m-[20px] rounded-md bg-black text-white  hover:scale-[1.05] ease-in duration-100 ' href="">Sign In</a>
            <div>
                <img className={`md:hidden w-[36px] h-[36px] sticky cursor-pointer z-[99]`} onClick={()=>setShowMenu(prev=>!prev)} src={menu} alt="menu" />
            </div>
            <div className={`bg-black text-white absolute ease duration-1000 flex flex-col items-center justify-center w-[50%] gap-[50px] size-[28px]  h-screen top-0 ${showMenu ? "right-0" : "right-[-150%]"}`}>
                <a className='hover:scale-[1.05]' href="">Home</a>
                <a className='hover:scale-[1.05]' href="">About</a>
                <a className='hover:scale-[1.05]' href="">Contact</a>
                <a className='hover:scale-[1.05]' href="">Agents</a>
                <a className='hover:scale-[1.05]' href="">Sign In</a>
                <a className='hover:scale-[1.05]' href="">Sign Up</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar