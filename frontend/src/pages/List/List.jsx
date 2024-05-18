import React, { Suspense } from 'react'
import { listData } from '../../lib/dummydata'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import banner from "../../assets/list.png"
import Map from '../../components/Map/Map'
import { Await, useLoaderData } from 'react-router-dom'

const List = () => {
    const data = useLoaderData()
  return (
    <div className='flex h-full'>
        <div className='flex-[3] h-full'>
            <div className='pr-[50px] flex flex-col gap-[50px] overflow-y-scroll h-full pb-[50px]'>
                <Filter />
                {/* {posts.map(item=><Card key={item.id} item={item} />)} */}
                <Suspense fallback={<p>Loading...</p>}>
                  <Await resolve={data.postResponse} errorElement={<p>Error</p>}>
                    {(postResponse) => postResponse.data.map(post=>(
                      <Card key={post.id} item={post}/>
                    ))}
                  </Await>

                </Suspense> 
            </div>
        </div> 
        <div className='flex-[2] h-full bg-black relative'>
          {/* <img  src={banner} alt="" className='absolute left-[-120px]  top-32 h-[70%]' /> */}
          <Suspense fallback={<p>Loading...</p>}>
                  <Await resolve={data.postResponse} errorElement={<p>Error</p>}>
                    {(postResponse) => <Map items={postResponse.data} />}
                  </Await>

                </Suspense>
          
        </div>
    </div> 
  )
}

export default List 