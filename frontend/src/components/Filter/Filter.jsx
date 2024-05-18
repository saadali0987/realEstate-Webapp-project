import React, {useState} from 'react'
import searchIcon from "../../assets/search (1).png"
import Input from './Input'
import "./Filter.css"
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [query, setQuery] = useState({
        type: searchParams.get("type") || "",
        city: searchParams.get("city") || "",
        property: searchParams.get("property") || "",
        minPrice: searchParams.get("minPrice") || null,
        maxPrice: searchParams.get("maxPrice") || null,
        bedroom: searchParams.get("bedroom") || "",
      });

      const handleChange = (e) => {
        setQuery({
          ...query,
          [e.target.name]: e.target.value,
        });
      };

      const handleFilter = () => {
        setSearchParams(query);
      };
  return (
    <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[24px] font-medium'>Search results for <b>{searchParams.get("city") || "everywhere"}</b></h1>
        <div>
            <div className='item'>
                <label htmlFor="city" className=' '>City</label>
                <input className='w-full p-2 outline-none' type="text" id='city' name='city' placeholder='lahore' onChange={handleChange} defaultValue={query.city} />
            </div>
        </div>

        <div className='flex justify-between items-center gap-[20px]'>
            <div className='item'>
                <label htmlFor="type">Type</label>
                <select className='p-2' id='type' name='type' onChange={handleChange} defaultValue={query.type}>
                    <option value="">Any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className='item'>
                <label htmlFor="property">Property</label>
                <select className='p-2' id='property' name='property' onChange={handleChange} defaultValue={query.property}>
                    <option value="any">Any</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Land">Land</option>
                </select>
            </div>
            <div className='item'>
                <label htmlFor="minPrice">Min Price</label>
                <input className='p-2' defaultValue={query.minPrice} type="number" id='minPrice' name='minPrice' placeholder='any' onChange={handleChange} />
            </div>
            <div className='item'>
                <label htmlFor="maxPrice">Max Price</label>
                <input className='p-2' defaultValue={query.maxPrice} type="number" id='maxPrice' name='maxPrice' placeholder='any' onChange={handleChange} />
            </div>
            <div className='item'>
                <label htmlFor="bedroom">Bedroom</label>
                <input className='p-2' defaultValue={query.bedroom} type="text" id='bedroom' name='bedroom' placeholder='any' onChange={handleChange} />
            </div>
            <button className='w-[60px] h-[60px] rounded-md flex justify-center items-center  cursor-pointer bg-black border-none' onClick={handleFilter}>
                <img className='w-[24px] h-[24px]' src={searchIcon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Filter