import React from 'react'
import List from "../../components/list/List"
import "./Profile.css"
import Chat from '../../components/Chat/Chat'

const Profile = () => {
  return (
    <div className='flex h-full'>
        <div className='_details flex-[3] overflow-y-scroll'>
            <div className='_wrapper px-[50px] flex flex-col gap-[50px] pb-10'>
                <div className='_title'>
                    <h1>User Information</h1>
                    <button className='_button'>Update Profile</button>
                </div>
                <div className='_info flex  justify-between items-center'>
                    <div className='_left flex flex-col gap-[20px]'>
                        <span>Username <b>Saad Ali</b></span>
                        <span>Email <b>l226608@lhr.nu.edu.pk</b></span>
                    </div>
                    <div className='_right'>
                        <img className='w-[100px] h-[100px]  object-cover rounded-md' src="https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png" alt="" />
                    </div>
                </div>

                
                <div className='_title'>
                    <h1>My Listing</h1>
                    <button className='_button'>Add Property</button>
                </div>
                <List />
                <div className='_title'>
                    <h1>Saved Properties</h1>
                </div>
                <List />
            </div>
        </div>
        <div className='_chat flex-[2] bg-black h-full'>
            <div className='_wrapper px-[20px] h-full'>
                <Chat />
            </div>
        </div>
    </div>
  )
}

export default Profile