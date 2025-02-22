import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gray-950 text-gray-300'>
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-green-700'>About</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About