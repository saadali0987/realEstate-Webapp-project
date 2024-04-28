import React, { useState } from 'react'
import "./Chat.css"

const Chat = () => {
    const [chatbox, setChatbox] = useState(true)
  return (
    <div className='_chat h-full  flex flex-col'>
        <div className='_messages flex-[1] flex flex-col gap-[20px] overflow-y-scroll'>
            <h1 className='text-white text-[25px]'>Messages</h1>
            <div className='_message'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNbz1wrGeNOw-6Sn1fxIeX53f-T5ChGfJ1NA1jT-vgw&s" alt="" />
                <span>Messi</span>
                <p>sell me your house bitch</p>
            </div>
            <div className='_message'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNbz1wrGeNOw-6Sn1fxIeX53f-T5ChGfJ1NA1jT-vgw&s" alt="" />
                <span>Messi</span>
                <p>sell me your house bitch</p>
            </div>
            <div className='_message'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNbz1wrGeNOw-6Sn1fxIeX53f-T5ChGfJ1NA1jT-vgw&s" alt="" />
                <span>Messi</span>
                <p>sell me your house bitch</p>
            </div>
            <div className='_message'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNbz1wrGeNOw-6Sn1fxIeX53f-T5ChGfJ1NA1jT-vgw&s" alt="" />
                <span>Messi</span>
                <p>sell me your house bitch</p>
            </div>
            <div className='_message'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNbz1wrGeNOw-6Sn1fxIeX53f-T5ChGfJ1NA1jT-vgw&s" alt="" />
                <span>Messi</span>
                <p>sell me your house bitch</p>
            </div>
            <div className='_message'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNbz1wrGeNOw-6Sn1fxIeX53f-T5ChGfJ1NA1jT-vgw&s" alt="" />
                <span>Messi</span>
                <p>sell me your house bitch</p>
            </div>
        </div>
        {chatbox && <div className='_chatbox flex-[1] bg-white flex flex-col justify-between overflow-y-scroll'>
            <div className='topp bg-gray-500 text-white'>
                <div className='flex items-center gap-[20px]'>
                    <img className='w-[30px] h-[30px] object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNbz1wrGeNOw-6Sn1fxIeX53f-T5ChGfJ1NA1jT-vgw&s" alt="" />
                    Messi
                </div>
                <span className='cursor-pointer' onClick={()=>setChatbox(null)}>X</span>
            </div>
            <div className='centerr overflow-y-scroll p-2 flex flex-col gap-4'>
                <div className='chatMessage'>
                    <p>sell me your house hijo de puta</p>
                    <span>1 min ago</span>
                </div>
                <div className='chatMessage own'>
                    <p>sell me your house hijo de puta</p>
                    <span>1 min ago</span>
                </div>
                <div className='chatMessage'>
                    <p>sell me your house hijo de puta</p>
                    <span>1 min ago</span>
                </div>
                <div className='chatMessage own'>
                    <p>sell me your house hijo de puta</p>
                    <span>1 min ago</span>
                </div>
                <div className='chatMessage'>
                    <p>sell me your house hijo de puta</p>
                    <span>1 min ago</span>
                </div>
                <div className='chatMessage own'>
                    <p>sell me your house hijo de puta</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className='bottomm border-t-2 border-black h-[60px] flex items-center justify-between'>
                <textarea className='flex-[3] h-full border-none outline-none p-2'></textarea>
                <button className='flex-[1] bg-black text-white   cursor-pointer h-full'>Send</button>
            </div>
        </div>}
    </div>
  )
}

export default Chat