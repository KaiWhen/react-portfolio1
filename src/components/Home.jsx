import React, { useState } from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div name='home' className='w-full h-screen bg-gray-950'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-green-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Kevin Wang</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Graduate Software Engineer,</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Highly motivated and results-driven Graduate Software Engineer with a solid foundation in web application
development seeking to contribute skills and knowledge to a productive team. Equipped with experience in
maintaining and improving web applications, along with proficiency in API development, database management and
version control systems.</p>
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2
            w-40 flex items-center hover:bg-green-900'> View Skills
            <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2'/>
            </span>
            </button>
            </Link>
            

        </div>

    </div>
  )
}

export default Home