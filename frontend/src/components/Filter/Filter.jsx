import React from 'react'
import searchIcon from "../../assets/search (1).png"
import Input from './Input'
import "./Filter.css"

const Filter = () => {
  return (
    <div className='flex flex-col gap-[10px]'>
        <h1 className='text-[24px] font-medium'>Search results for <b>London</b></h1>
        <div>
            <div className='item'>
                <label htmlFor="city">Location</label>
                <input className='w-full' type="text" id='city' name='city' placeholder='City' />
            </div>
        </div>

        <div className='flex justify-between items-center gap-[20px]'>
            <div className='item'>
                <label htmlFor="type">Type</label>
                <select id='type' name='type'>
                    <option value="any">Any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className='item'>
                <label htmlFor="property">Property</label>
                <select id='property' name='property'>
                    <option value="any">Any</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Land">Land</option>
                </select>
            </div>
            <div className='item'>
                <label htmlFor="minPrice">Min Price</label>
                <input type="number" id='minPrice' name='minPrice' placeholder='any' />
            </div>
            <div className='item'>
                <label htmlFor="maxPrice">Max Price</label>
                <input type="number" id='maxPrice' name='maxPrice' placeholder='any' />
            </div>
            <div className='item'>
                <label htmlFor="bedroom">Bedroom</label>
                <input type="text" id='bedroom' name='bedroom' placeholder='any' />
            </div>
            <button className='w-[60px] h-[60px] rounded-md flex justify-center items-center  cursor-pointer bg-black border-none'>
                <img className='w-[24px] h-[24px]' src={searchIcon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Filter