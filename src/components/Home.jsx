import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-green-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kevin Wang</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Graduate Software Engineer,</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt perspiciatis in nostrum rem, provident, id, corrupti nam dolores consequuntur architecto quia earum iste repudiandae? Inventore neque est maiores laborum?</p>

            <button className='text-white group border-2 px-6 py-3 my-2
            w-40 flex items-center hover:bg-green-900'> View Work
            <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2'/>
            </span>
            </button>
            

        </div>

    </div>
  )
}

export default Home