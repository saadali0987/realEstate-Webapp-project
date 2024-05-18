import React, { useContext, useState } from 'react'
import logo from "../../assets/logoo.png"
import menu from "../../assets/menu.png"
import { BsHouseCheck } from "react-icons/bs";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { authContext } from '../../context/authContext';
import noAvatar from "../../assets/noavatar.jpg"
// const Navbar = () => {
//     const [showMenu, setShowMenu] = useState(false)
//     const user = true
//   return (
//     <nav className='flex justify-between h-[100px] items-center'>
//         <div className='flex flex-[3]  gap-[50px] items-center'>
//             <a href="/" className='hover:scale-[1.05] ease-in duration-100 flex items-center font-bold  text-[20px] gap-[10px]'>
//                 {/* <img className='w-[28px]' src={logo} alt="logo" /> */}
//                 <BsHouseCheck className='w-8 h-8' />
//                 <span className='md:hidden lg:inline'>PrimePropertyPortal</span>
//             </a>
//             <a className='hover:scale-[1.05] hidden md:inline ease-in duration-100' href="">Home</a>
//             <a className='hover:scale-[1.05] hidden md:inline ease-in duration-100' href="">About</a>
//             <a className='hover:scale-[1.05] hidden md:inline ease-in duration-100' href="">Contact</a>
//             <a className='hover:scale-[1.05] hidden md:inline ease-in duration-100' href="">Agents</a>
//         </div>


//         <div className='flex-[2]  flex items-center justify-end h-full lg:bg-black'>
//             {user ? <div className='user text-white flex items-center font-bold justify-between mr-8  gap-6 '>
//                 <img className='w-[40px] h-[40px] rounded-full object-cover mr-[5px] border-2 border-white' src="https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png" alt="" />
//                 <span>Saad Ali</span>
//                 <Link to="/profile" className='relative'>
//                     <div className='notification absolute bg-green-300 p-2 rounded-full text-black w-4 h-4 top-[-8px] right-[-8px] text-xs flex justify-center items-center'>3</div>
//                     <span>Profile</span>
//                 </Link>


//             </div> : 
//             (<><Link className=' hidden md:inline hover:scale-[1.05] ease-in duration-100 py-[12px] px-[24px] m-[20px] bg-black rounded-md text-white' to="/register">Sign Up</Link>
//             <Link className=' hidden md:inline py-[12px] px-[24px] m-[20px] rounded-md bg-black text-white  hover:scale-[1.05] ease-in duration-100 ' to="/login">Sign In</Link> </>) }
//             <div>
//                 <img className={`md:hidden w-[36px] h-[36px] sticky cursor-pointer z-[99]`} onClick={()=>setShowMenu(prev=>!prev)} src={menu} alt="menu" />
//             </div>
//             <div className={`bg-black text-white absolute ease duration-1000 flex flex-col items-center justify-center w-[50%] gap-[50px] size-[28px]  h-screen top-0 ${showMenu ? "right-0" : "right-[-150%]"}`}>
//                 <a className='hover:scale-[1.05]' href="">Home</a>
//                 <a className='hover:scale-[1.05]' href="">About</a>
//                 <a className='hover:scale-[1.05]' href="">Contact</a>
//                 <a className='hover:scale-[1.05]' href="">Agents</a>
//                 <a className='hover:scale-[1.05]' href="">Sign In</a>
//                 <a className='hover:scale-[1.05]' href="">Sign Up</a>
//             </div>
//         </div>
//     </nav>
//   )
// }

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    
    const {currentUser, updateUser} = useContext(authContext)
    const handleLogout = async() =>{
        try{
            const res = await axios.post("http://localhost:6900/api/auth/logout", {}, {withCredentials:true})

            updateUser(null)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <nav className='flex justify-between h-[100px] items-center'>
        <div className='flex flex-[3]  gap-[50px] items-center'>
            <a href="/" className='hover:scale-[1.05] ease-in duration-100 flex items-center font-bold  text-[20px] gap-[10px]'>
                {/* <img className='w-[28px]' src={logo} alt="logo" /> */}
                <BsHouseCheck className='w-8 h-8' />
                <span className='md:hidden lg:inline text-[24px]'>PrimePropertyPortal</span>
            </a>
            <a className='hover:scale-[1.05] hidden md:inline ease-in duration-100' href="">Saad</a>
            <a className='hover:scale-[1.05] hidden md:inline ease-in duration-100' href="">Usman</a>
            <a className='hover:scale-[1.05] hidden md:inline ease-in duration-100' href="">Fahad</a>
            <a className='hover:scale-[1.05] hidden md:inline ease-in duration-100' href="">Hanzala</a>
        </div>


        <div className='flex-[2]  flex items-center justify-end h-full lg:bg-black'>
            {currentUser ? <div className='user text-white flex items-center font-bold justify-between mr-8  gap-6 '>
                <img className='w-[40px] h-[40px] rounded-full object-cover mr-[5px] border-2 border-white' src={currentUser.avatar || noAvatar} alt="" />
                <div className=' relative'>
                    <div className='notification absolute bg-green-300 p-2 rounded-full text-black w-4 h-4 top-[-8px] right-[-8px] text-xs flex justify-center items-center'>3</div>
                    <Link to="/profile">
                        <span>{currentUser.username}</span>
                    </Link>
                </div>
                <Link to="/" onClick={handleLogout} className='relative'>
                    <span>Logout</span>
                </Link>


            </div> : 
            (<><Link className=' hidden md:inline hover:scale-[1.05] ease-in duration-100 py-[12px] px-[24px] m-[20px] bg-black rounded-md text-white' to="/register">Sign Up</Link>
            <Link className=' hidden md:inline py-[12px] px-[24px] m-[20px] rounded-md bg-black text-white  hover:scale-[1.05] ease-in duration-100 ' to="/login">Sign In</Link> </>) }
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