import React from 'react'
import { Reveal } from './utils/Reveal'

const Experience = () => {
  return (
    <div name='experience' className='w-full md:h-screen text-gray-300 bg-gray-950'>
      
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <Reveal>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-700'>
              Experience
            </p>
            <p className='py-6'>Work Experience</p>
          </div>

          <div className="w-full max-w-4xl mx-auto p-6 bg-gray-950 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
          <h2 className="text-xl font-bold text-gray-300 mb-0">Software Engineer Intern</h2>
          <p className="text-lg text-gray-300 mb-2">Arista Networks</p>
          <p className="text-gray-300 italic mb-4">January 2023 - August 2023</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Enhanced technical expertise by acquiring hands-on skills in Python and Go programming languages.</li>
            <li>Developed key features for the backend of a network-wide workload orchestration and workflow automation
    tool for effective service delivery.</li>
            <li>Streamlined development workflows by implementing continuous integration and delivery using CI/CD tools
    such as Gerrit and Jenkins.</li>
          </ul>
         </div>
        </Reveal>
        </div>
      
    </div>
  )
}

export default Experience