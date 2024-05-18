import React, { useState } from 'react'
import searchIcon from "../../assets/search (1).png"
import {Link} from "react-router-dom"

const Searchbar = () => {
    const [query, setQuery] = useState({
        type: "buy",
        city: "",
        max: null,
        min: null,
    })

    const switchType = (val) =>{
        setQuery(prev=>({...prev, type:val}))
    }

    const handleChange = (e )=>{
        setQuery(prev=>({...prev, [e.target.name] : e.target.value}))
    }
  return (
    <div>
        <div>
            <button className={`py-[16px] px-[32px] border-[1px] rounded-md border-gray-300 ${query.type == "buy" ? "bg-black text-white" : ""}`} onClick={()=>switchType("buy")}>Buy</button>
            <button className={`py-[16px] px-[32px] border-[1px] border-gray-300 rounded-md ${query.type == "rent" ? "bg-black text-white" : ""}`} onClick={()=>switchType("rent")}>Rent</button>
        </div>
        <form className='flex flex-col md:flex-row justify-between border-[1px] border-gray-300 h-[64px] gap-[5px]' action="">
            <input className='p-[20px] border-[1px] border-gray-300 md:border-none w-auto md:py-[0px] md:px-[5px] xl:px-[10px] outline-none md:w-[192px]' type="text" name="city" id="" placeholder='City' onChange={handleChange} />
            <input onChange={handleChange} className='p-[20px] w-auto border-[1px] border-gray-300 md:border-none md:py-[0px] md:px-[5px] xl:px-[10px] outline-none md:w-[140px] xl:w-[192px]' type="number" name="minPrice" id="" min={0} placeholder='Min Price' />
            <input onChange={handleChange} className='p-[20px] w-auto border-[1px] border-gray-300 md:border-none md:py-0 md:px-[5px] xl:px-[10px] outline-none md:w-[140px] xl:w-[192px]' type="number" name="maxPrice" id="" min={0} placeholder='Max Price' />

            <Link className='h-full cursor-pointer' to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.min}&maxPrice=${query.max}`}>
                <button className='bg-black  h-full p-3 flex justify-center items-center cursor-pointer'>
                    <img className='w-[24px] h-[24px]' src={searchIcon} alt="search"  />
                </button>
            </Link>
            
        </form>
    </div>
  )
}

export default Searchbar