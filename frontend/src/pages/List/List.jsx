import React from 'react'
import { listData } from '../../lib/dummydata'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import banner from "../../assets/list.png"
import Map from '../../components/Map/Map'

const List = () => {
    const data = listData
  return (
    <div className='flex h-full'>
        <div className='flex-[3] h-full'>
            <div className='pr-[50px] flex flex-col gap-[50px] overflow-y-scroll h-full pb-[50px]'>
                <Filter />
                {data.map(item=><Card key={item.id} item={item} />)}
            </div>
        </div>
        <div className='flex-[2] h-full bg-black relative'>
          {/* <img  src={banner} alt="" className='absolute left-[-120px]  top-32 h-[70%]' /> */}
          <Map items={data} />
        </div>
    </div>
  )
}

export default List 