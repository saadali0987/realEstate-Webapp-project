import React from 'react'
import pin from "../../assets/pin.png"
import {Link} from "react-router-dom"
import bed from "../../assets/bed.png"
import bath from "../../assets/bath.png"
import save from "../../assets/save.png"
import chat from "../../assets/chat.png"
import "./Card.css"


const Card = ({item}) => {
  console.log(item)
  return (
    <div className='flex gap-[20px]'>
      <Link className='flex-[2] h-[200px]' to={`/${item.id}`}>
        <img src={item.images[0]?.url} alt="" className='h-full w-full object-cover rounded-md' />
      </Link>
      <div className='flex-[3] flex flex-col justify-between gap-[10px]'>
        <h2 className=' text-xl  opacity-70 hover:opacity-100   hover:scale-[1.01] ease-linear duration-100'>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className='flex items-center gap-[5px] text-[18px] opacity-65'>
          <img className='icon' src={pin} alt="" />
          <span>{item.address}</span>
        </p>
        <p className='bg-black text-white font-bold rounded-md  w-max p-2'>Price ${item.price}</p>
        <div className='flex justify-between gap-[10px]'>
          <div className='flex gap-[20px] text-[14px]'>
            <div className='feature'>
              <img className='icon' src={bed} alt="" />
              <span>{item.bedroom}</span>
            </div>
            <div className='feature'>
              <img className='icon' src={bath} alt="" />
              <span>{item.bathroom}</span>
            </div>
          </div>
          <div className='flex gap-[20px]'>
            <div className=' cursor-pointer hover:scale-[1.05]'>
              <img className='icon' src={save} alt="" />
            </div>
            <div className='cursor-pointer hover:scale-[1.05]'>
              <img className='icon' src={chat} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card