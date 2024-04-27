import React from 'react'
import Slider from '../../components/Slider/Slider'
import { singlePostData, userData } from '../../lib/dummydata'
import pin from "../../assets/pin.png"

const SinglePage = () => {
  return (
    <div className='flex h-full'>
      <div className='flex-[3] overflow-y-scroll pb-4 '>
        <div className='pr-[50px]'>
          <Slider images={singlePostData.images} />
          <div className='info mt-4'>
            <div className='_top flex justify-between'>
              <div className='_post flex flex-col gap-[20px]'>
                <h1 className='text-[28px]'>{singlePostData.title}</h1>
                <div className='_address flex items-center gap-[5px]'>
                  <img className='w-[16px] h-[16px] opacity-60' src={pin} alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className=' bg-black text-white p-2 w-max rounded-md'>${singlePostData.price}</div>
              </div>
              <div className='_user flex flex-col justify-center items-center gap-[20px]'>
                <img className='w-[50px] h-[50px] rounded-full object-cover' src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className='_bottom mt-[50px] opacity-70'>
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className='flex-[2] bg-black text-white'>
        <div className='px-[20px]'></div>
      </div>
    </div>
  )
}

export default SinglePage