import React from 'react';
import { data } from "../constants/index";
import { Reveal } from './utils/Reveal';


const Work = () => {
  
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-gray-950'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <Reveal>
            <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-700'>
                Work
              </p>
              <p className='py-6'>// WIP</p>
            </div>

            {/* container for projects */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    
            </div>
          </Reveal>
        </div>
      
    </div>
  );
};

export default Work;