import React, { useState } from 'react'
import searchIcon from "../../assets/search (1).png"

const Searchbar = () => {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        max: 0,
        min: 0,
    })

    const switchType = (val) =>{
        setQuery(prev=>({...prev, type:val}))
    }
  return (
    <div>
        <div>
            <button className={`py-[16px] px-[32px] border-[1px] rounded-md border-gray-300 ${query.type == "buy" ? "bg-black text-white" : ""}`} onClick={()=>switchType("buy")}>Buy</button>
            <button className={`py-[16px] px-[32px] border-[1px] border-gray-300 rounded-md ${query.type == "rent" ? "bg-black text-white" : ""}`} onClick={()=>switchType("rent")}>Rent</button>
        </div>
        <form className='flex flex-col md:flex-row justify-between border-[1px] border-gray-300 h-[64px] gap-[5px]' action="">
            <input className='p-[20px] border-[1px] border-gray-300 md:border-none w-auto md:py-[0px] md:px-[5px] xl:px-[10px] outline-none md:w-[192px]' type="text" name="location" id="" placeholder='City' />
            <input className='p-[20px] w-auto border-[1px] border-gray-300 md:border-none md:py-[0px] md:px-[5px] xl:px-[10px] outline-none md:w-[140px] xl:w-[192px]' type="number" name="minPrice" id="" min={0} placeholder='Min Price' />
            <input className='p-[20px] w-auto border-[1px] border-gray-300 md:border-none md:py-0 md:px-[5px] xl:px-[10px] outline-none md:w-[140px] xl:w-[192px]' type="number" name="maxPrice" id="" min={0} placeholder='Max Price' />
            <button className='bg-black p-3 flex justify-center items-center cursor-pointer'>
                <img className='w-[24px] h-[24px]' src={searchIcon} alt="search"  />
            </button>
        </form>
    </div>
  )
}

export default Searchbar