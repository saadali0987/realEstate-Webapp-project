import React, { useContext, useState } from 'react'
import Slider from '../../components/Slider/Slider'
import axios from "axios"
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
import { useLoaderData, useNavigate } from 'react-router-dom'
import { authContext } from '../../context/authContext'
import { IoHeartSharp } from "react-icons/io5";
import DOMPurify from "dompurify"
import noavatar from "../../assets/noavatar.jpg"


const SinglePage = () => {
  const post = useLoaderData()
  const [saved, setSaved] = useState(post.isSaved )
  console.log(post)
  const {currentUser} = useContext(authContext)
  const navigate = useNavigate()

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    // AFTER REACT 19 UPDATE TO USEOPTIMISTIK HOOK
    setSaved((prev) => !prev);
    try {
      await axios.post("http://localhost:6900/api/users/save", { postId: post.id }, {withCredentials:true});
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };
  
  
  
  return (
    <div className='flex h-full'>
      <div className='flex-[3] overflow-y-scroll pb-4 '>
        <div className='pr-[50px]'>
          <Slider images={post.images} />
          <div className='info mt-4'>
            <div className='_top flex justify-between'>
              <div className='_post flex flex-col gap-[20px]'>
                <h1 className='text-[28px]'>{post.title}</h1>
                <div className='_address flex items-center gap-[5px]'>
                  <img className='w-[16px] h-[16px] opacity-60' src={pin} alt="" />
                  <span>{post.address}</span>
                </div>
                <div className=' bg-black text-white p-2 w-max rounded-md'>Rs {post.price} Crore</div>
              </div>
              <div className='_user flex flex-col justify-center items-center gap-[20px]'>
                <img className='w-[50px] h-[50px] rounded-full object-cover' src={post.user.avatar || noavatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div className='_bottom mt-[50px] opacity-70' dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(post.postDetail.desc)}}>
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
                <p>{post.postDetail.utilities}</p>
              </div>
            </div>
            <div className='_feature'>
              <img src={pet} alt="" />
              <div className='featureText'>
                <span>Pet Policy</span>
                <p>{post.postDetail.pet}</p>
              </div>
            </div>
            <div className='_feature'>
              <img src={utility} alt="" />
              <div className='featureText'>
                <span>Furniture</span>
                <p>{post.postDetail.furniture}</p>
              </div>
            </div>
          </div>
          <p className='sizes title'>Room Sizes</p>
          <div className='sizes flex justify-between text-black'>
            <div className='sizeContainer'>
              <img src={size} alt="" />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className='sizeContainer'>
              <img src={bed} alt="" />
              <span>{post.bedroom} bedroom</span>
            </div>
            <div className='sizeContainer'>
              <img src={bath} alt="" />
              <span>{post.bathroom} bath</span>
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
            <Map items={[post]} />
          </div>
          <div className='buttons flex justify-between mt-6'>
            <button className='_button '>
              <MdOutlineMessage className='w-10 h-10' />
            </button>
            <button onClick={handleSave} className='_button'>
              {saved ? <IoHeartSharp color='red'   className='w-10 h-10' /> : <IoHeartSharp className='w-10 h-10' />}
              
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage