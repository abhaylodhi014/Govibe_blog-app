import React from 'react'
import Link from 'next/link'

import { Spotlight } from './ui/Spotlight'
function Herosection() {
  return (
    <div className=' lg:h-[25rem]  md:h-[25rem]  w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto pt-5 md:py-0  '>
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='p-4 relative z-10 w-full text-center'>
      <h1 className='mt-2 md:mt-10  text-2xl mx-2 sm:mx-8  md:text-4xl lg:text-7xl sm:text-2xl font-bold bg-clip-text lg:mx-20 text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'><span className='bg-none text-white'>🌍</span> Explore. Share. Inspire.  
      <p>Your Journey, Your Story!</p> </h1>
      <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
      >Embark on unforgettable adventures and share your travel experiences with the world. Whether you're a seasoned explorer or just starting your journey, our platform lets you connect, inspire, and discover new destinations. Start sharing your stories today and turn every trip into a lasting memory!</p>
     
      </div>
    </div>
  )
}

export default Herosection
