import React from 'react'
import Slider from '../../components/Slider/Slider'
import { singlePostData, userData } from '../../lib/dummydata'
import pin from "../../assets/pin.png"
import "./SinglePage.css"
import Map from "../../components/Map/Map"
import chat from "../../assets/chat.png"
import save from "../../assets/save.png"
import utility from "../../assets/utility.png"
import pet from "../../assets/pet.png"
import fee from "../../assets/fee.png"
import size from "../../assets/size.png"
import bed from "../../assets/bed.png"
import bath from "../../assets/bath.png"
import school from "../../assets/school.png"
import bus from "../../assets/bus.png"
import restaurant from "../../assets/restaurant.png"
import { FaHeartCirclePlus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md"


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
      <div className='features flex-[2] bg-black text-white h-full overflow-y-scroll'>
        <div className='px-[20px] flex flex-col gap-[10px]'>
          <p className='general title'>General</p>
          <div className='listVertical'>
            <div className='_feature'>
              <img src={utility} alt="" />
              <div className='featureText'>
                <span>Utilities</span>
                <p>Renter is Respnsible</p>
              </div>
            </div>
            <div className='_feature'>
              <img src={pet} alt="" />
              <div className='featureText'>
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className='_feature'>
              <img src={utility} alt="" />
              <div className='featureText'>
                <span>Furniture</span>
                <p>Furnished</p>
              </div>
            </div>
          </div>
          <p className='sizes title'>Room Sizes</p>
          <div className='sizes flex justify-between text-black'>
            <div className='sizeContainer'>
              <img src={size} alt="" />
              <span>80 sqft</span>
            </div>
            <div className='sizeContainer'>
              <img src={bed} alt="" />
              <span>2 beds</span>
            </div>
            <div className='sizeContainer'>
              <img src={bath} alt="" />
              <span>1 bath</span>
            </div>
          </div>
          {/* <p className='nearbyLocation title'>Nearby Places</p>
          <div className='listHorizontal '>
            <div className='_feature'>
              <img src={school} alt="" />
              <div className='featureText'>
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className='_feature'>
              <img src={school} alt="" />
              <div className='featureText'>
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className='_feature'>
              <img src={school} alt="" />
              <div className='featureText'>
                <span>Restaurant</span>
                <p>300m away</p>
              </div>
            </div>
          </div> */}
          <p className='location title'>Location</p>
          <div className='mapContainer w-full h-[200px]'>
            <Map items={[singlePostData]} />
          </div>
          <div className='buttons flex justify-between mt-6'>
            <button className='_button '>
              <MdOutlineMessage className='w-10 h-10' />
            </button>
            <button className='_button'>
              <CiHeart className='w-10 h-10' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage