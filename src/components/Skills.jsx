import React from 'react'
import { skills } from "../constants"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gray-950 text-gray-300'>
    
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-green-700">Skills</p>
                <p className="py-4">These are the technologies I've worked with</p>
            </div>

            {/* Cards */}
            <ul className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                {skills.map((item, _) => (
                    <li className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className='w-20 mx-auto' src={item.image} alt={item.skill + " icon"} />
                        <p className='my-4'>{item.skill}</p>
                    </li>
                ))}
            </ul>

        </div>

    </div>
  )
}

export default Skills