import React, { useState } from 'react'
import arrow from "../../assets/arrow.png"

const Slider = ({images}) => {
  const [sliderImageIndex, setSliderImageIndex] = useState(null);
  const rightArrowFunction = ()=>{
    if(sliderImageIndex == 0){
      setSliderImageIndex(prev=>images.length - 1);
    }
    setSliderImageIndex(prev=>((prev-1) % images.length))
    

  }
  return (
    <div className='h-[350px] w-full flex gap-[20px]'>
      {sliderImageIndex != null && (<div className='fullSlider z-10 absolute w-screen h-screen top-0 left-0 bg-black flex items-center justify-between'>
        <div className='leftArrow cursor-pointer flex-[1] flex justify-center items-center' onClick={()=>rightArrowFunction()}>
          <img className='w-[50px] ' src={arrow} alt="" />
        </div>
        <div className='imgContainer flex-[10]'>
          <img src={images[sliderImageIndex]} className='w-full h-full object-cover' alt="" />
        </div>
        <div className='rightArrow cursor-pointer flex-[1] flex justify-center items-center rotate-180' onClick={()=>setSliderImageIndex(prev=>((prev+1) % images.length))}>
          <img className='w-[50px] ml-6' src={arrow} alt="" />
        </div>
        <div className='close absolute top-0 right-0 text-white text-[36px]  cursor-pointer  p-8 ' onClick={()=>setSliderImageIndex(null)}>X</div>
      </div>)}
      <div className='bigImage flex-[3]'>
        <img className='w-full h-full rounded-md object-cover cursor-pointer ' src={images[0]} alt="" onClick={()=>setSliderImageIndex(0)} />
      </div>
      <div className='smallImages flex-[1] flex flex-col justify-between gap-[20px]'>
        {images.slice(1).map((image, index)=>(<img className='h-[100px] w-full rounded-md object-cover cursor-pointer' onClick={()=>setSliderImageIndex(index + 1)} src={image} key={index} />))}
      </div>
    </div>
  )
}

export default Slider