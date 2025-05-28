import React from 'react'

function Cards() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="" className='w-full h-screen bg-[#ebffa5] flex items-center gap-5 px-32 rounded-t-xl'>
      <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='relative card rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center'>
            <img className='w-32' src="/Portfolio_Pro/At0mwebsiteGreen.png" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 border border-[#CDEA68] text-[#CDEA68] rounded-full'>&copy;2023-2025</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
        <div className='relative card rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
            <img className='w-32' src="/Portfolio_Pro/At0mwebsiteWhite.png" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 border rounded-full'>&copy;At0M</button>
        </div>
        <div className='relative card rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
            <img className='w-32' src="/Portfolio_Pro/At0mwebsiteWhite.png" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 border rounded-full'>&copy;Hardik</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
    