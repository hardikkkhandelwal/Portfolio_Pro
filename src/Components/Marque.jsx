import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
  return (
    <div data-scroll data-scroll-speed="-.1" data-scroll-section className='w-full py-8 bg-[#004d43] rounded-t-2xl'>
      <div className='text border-t-[1px] border-b-[1px] border-zinc-300 flex overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x: "0%"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 50}} className='text-[24vw] leading-none font-[Founder] uppercase mb-[6vw] pt-5'> Hardik Khandelwal</motion.h1>
        <motion.h1 initial={{x: "0%"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 50}} className='text-[24vw] leading-none font-[Founder] uppercase mb-[6vw] pt-5'> Hardik Khandelwal</motion.h1>
      </div>
    </div>
  )
}

export default Marque
