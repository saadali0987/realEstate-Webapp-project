import React from 'react'
import bg from "../../assets/bg.png"
import banner from "../../assets/banner.png"
import Searchbar from '../../components/Searchbar/Searchbar'

const Home = () => {
  return (
    <div className='flex h-full'>
        <div className='flex-[3]'>
            <div className='p-0 lg:pr-[100px] flex flex-col  mt-12 md:mt-0 justify-start md:justify-center gap-[50px] h-full'>
                <h1 className=' text-6xl'>Find And Sell Real Estate. Your Dream awaits...</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, consequuntur accusamus! Reprehenderit neque laudantium blanditiis tenetur quae ipsam iusto esse excepturi eligendi accusamus repellat nesciunt dignissimos adipisci expedita cumque provident tempora, odio laborum quisquam. Aperiam quasi itaque doloribus accusamus deleniti vero at exercitationem quo. Ab incidunt nemo atque. Doloribus, commodi.</p>
                <Searchbar />

                <div className='justify-between hidden md:flex'>
                    <div>
                        <h1 className='text-[32px]'>10+</h1>
                        <h2 className='text-[18px]  opacity-55'>Years of Experience</h2>
                    </div>
                    <div>
                        <h1 className='text-[32px]'>200</h1> 
                        <h2 className='text-[18px] opacity-55'>Awards Recieved</h2>
                    </div>
                    <div>
                        <h1 className='text-[32px]'>10,000+</h1>
                        <h2 className='text-[18px] opacity-55'>Properties Listed</h2>
                    </div>
                </div>
            </div>
        </div>



        <div className='flex-[2] bg-teal-300 relative flex hidden lg:block'>
            <img className='w-[115%] absolute right-[150px] h-[70%] items-center' src={banner} alt="background" />
        </div>
    </div>
  )
}

export default Home