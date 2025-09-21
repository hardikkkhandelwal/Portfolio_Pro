import { motion } from 'framer-motion';
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from 'react-scroll';

function LandingPage() {
  return (
    <div  id="navbar" data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructureb mt-52 px-20'>
        {["I Create","Eye-Opening","Animations"].map((item,index) =>{
        return <div className='masker font-["Founder"]'>
            <div className='w-fit flex'>
                {index === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "9vw" }}
                transition={{ ease: [0.85, 0, 0.15, 1], duration: 1.2, delay: 8 }}
                className="h-[5.8vw] mr-[1vw] rounded-md overflow-hidden relative top-[0.9vw]"
              >
                <img
                  src="/Portfolio_Pro/mclaren.png"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            )}

                <h1 className='uppercase text-[7.5vw] leading-[7vw] tracking-tight font-regular'>{item}</h1>
            </div>
        </div>
        })}
      </div>
          <div className='border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20'>
            {[
              "For Visionary Brands and Studios",
              "From Concept Renders to Final Animations",
            ].map((item, index) => {
              return (
                <p key={index} className='text-md font-light tracking-tight leading-none'>
                  {item}
                </p>
              );
            })}
            <div className='start flex items-center gap-2'>
              <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full uppercase cursor-pointer hover:bg-zinc-800 transition'>
                <Link to='contact' smooth={true} offset={100} duration={2000}>
                Contact Me! 
                </Link>
              </div>
              <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-500 hover:bg-zinc-800 transition'>
                <FiArrowUpRight />
              </div>
            </div>
          </div>
    </div>
  )
}

export default LandingPage
