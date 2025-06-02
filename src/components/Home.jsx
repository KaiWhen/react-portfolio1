import React, { useState } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
import { Reveal } from './utils/Reveal';

const Home = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div name='home' className='w-full h-screen bg-gray-950'>
        {/* Container */}
        
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <Reveal>
            <p className='text-green-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kevin Wang</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a MSc Computer Science Graduate,</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am very excited to dive into the world of software engineering
            and contribute to real world projects. I have experience in both front and back-end technologies, and would love to join
            a productive team where I can learn and grow.</p>
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2
            w-40 flex items-center hover:bg-green-900'> View Skills
            <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2'/>
            </span>
            </button>
            </Link>
            
            </Reveal>
        </div>
        

    </div>
  )
}

export default Home