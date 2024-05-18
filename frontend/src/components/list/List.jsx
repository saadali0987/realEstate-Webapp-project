import React from 'react'
import { listData } from '../../lib/dummydata'
import Card from '../Card/Card'

const List = ({posts}) => {
    const data = listData
  return (
    <div className='_list flex flex-col gap-[50px]'>
        {posts.map(item=>(
            <Card key={item.id} item={item} />
        ))}
    </div>
  )
}

export default List