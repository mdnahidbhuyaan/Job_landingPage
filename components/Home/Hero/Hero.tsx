import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex justify-center flex-col'>
      <div className='w-[900%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10 '>
        {/* textContent */}
        <div className=''>
     <h1 className='text-3xl sm:text-6xl font-bold'>Join us & Explore Thousands of Jobs  </h1>
     <p className='mt-4 text-sm sm:text-lg font-medium'>Find Job, Employment & career opportunities</p>
        </div>
        {/* imageContant */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default Hero
