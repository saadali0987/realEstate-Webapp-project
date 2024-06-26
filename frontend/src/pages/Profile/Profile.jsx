import React, { Suspense, useContext, useEffect } from 'react'
import List from "../../components/list/List"
import "./Profile.css"
import Chat from '../../components/Chat/Chat'
import axios from "axios"
import { useNavigate, Link, useLoaderData, Await } from 'react-router-dom'
import noAvatar from "../../assets/noavatar.jpg" 
import { authContext } from '../../context/authContext'

const Profile = () => {
    const data = useLoaderData()
    const navigate = useNavigate()
    const {currentUser, updateUser} = useContext(authContext)

    

    const handleLogout = async() =>{
        try{
            const res = await axios.post("http://localhost:6900/api/auth/logout", {}, {withCredentials:true})

            updateUser(null)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }


  return (
     <div className='flex h-full'>
        <div className='_details mt-14 flex-[3] overflow-y-scroll'>
            <div className='_wrapper px-[50px] flex flex-col gap-[50px] pb-10'>
                <div className='_title'>
                    <h1>User Information</h1>
                    <Link to="/profile/update">
                        <button className='_button'>Update Profile</button>
                    </Link>
                    
                </div>
                <div className='_info flex  justify-between items-center'>
                    <div className='_left flex flex-col gap-[20px]'>
                        <span>Username <b>{currentUser.username}</b></span>
                        <span>Email <b>{currentUser.email}</b></span>
                        {/* <button onClick={handleLogout} className='bg-black text-white p-1 rounded-md  w-20'>Logout</button> */}
                    </div>
                    <div className='_right'>
                        <img className='w-[100px] h-[100px]  object-cover rounded-md' src={currentUser.avatar || noAvatar} alt="" />
                    </div>
                </div>

                <hr className='h-[2px] bg-black' />

                
                <div className='_title'>
                    <h1>My Listing</h1>
                    <Link to="/add">
                        <button className='_button'>Add Property</button>
                    </Link>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                  <Await resolve={data.postResponse} errorElement={<p>Error</p>}>
                    {(postResponse) => <List posts={postResponse.data.userPosts} />}
                  </Await>
                </Suspense>
    
                <div className='_title'>
                    <h1>Saved Properties</h1>
                </div>
                <Suspense fallback={<p>Loading...</p>}>
                  <Await resolve={data.postResponse} errorElement={<p>Error</p>}>
                    {(postResponse) => <List posts={postResponse.data.savedPosts} />}
                  </Await>
                </Suspense>
            </div>
        </div>
        <div className='_chat flex-[2] bg-black h-full'>
            <div className='_wrapper px-[20px] h-full'>
                {/* <Chat /> */}
            </div>
        </div>
    </div>
  )
}

export default Profile