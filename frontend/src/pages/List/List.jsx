import React from 'react'
import { listData } from '../../lib/dummydata'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'

const List = () => {
    const data = listData
  return (
    <div className='flex h-full'>
        <div className='flex-[3]'>
            <div className='pr-[50px]'>
                <Filter />
                {data.map(item=><Card key={item.id} item={item} />)}
            </div>
        </div>
        <div className='flex-[2]  bg-teal-300'>map</div>
    </div>
  )
}

export default List 