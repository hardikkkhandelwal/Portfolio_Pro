import React from 'react'

function Footer() {
  return (
    <div id="contact" data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full h-screen bg-[#CDEA68] font-[Founder] p-20 flex gap-5 text-black rounded-t-xl'>
        <div className='w-1/2 flex flex-col justify-between h-full'>
            <div className='heading'>
                <h1 className='text-[8vw] leading-none uppercase -mb-10'>Eye-</h1>
                <h1 className='text-[8vw] leading-none uppercase -mb-10'>Opening</h1>
            </div>
            <img className='w-32' src="/Portfolio/At0mwebsite.png" alt="" />
        </div>
        <div className='w-1/2'>
                <h1 className='text-[8vw] leading-none uppercase -mb-10'>Animations</h1>
                <div className='flex flex-col items-start text-xl mt-32 leading-none mr-52 font-[Montreal]'>
                  <span className='mb-5'>S:</span>
                  {[
                    { name: "Instagram", url: "https://www.instagram.com/at0m.3d/" },
                    { name: "Behance", url: "https://www.behance.net/at0m3d" },
                    { name: "Youtube", url: "https://www.youtube.com/@Atom3DRender" },
                  ].map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-block overflow-hidden"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black transition-transform duration-300 transform group-hover:translate-x-full"></span>
                    </a>
                  ))}
                </div>


                    <div className='flex flex-col items-start text-xl mt-32 leading-none mr-52 font-[Montreal]'>
                      <span className='mb-5'>L:</span>
                      {["Ahmedabad","Gujarat,India"].map((item, index) => (
                      <span className='underline' key={index}>{item}</span>
                      ))}
                  </div>

                    <div className='flex flex-col items-start text-xl mt-32 leading-none mr-52 font-[Montreal]'>
                      <span className='mb-5'>E:</span>
                      {["hardikkhandelwal3d@gmail.com"].map((item, index) => (
                      <span className='underline' key={index}>{item}</span>
                      ))}
                  </div>
                    <div className='text-[#353535] flex font-[Montreal] gap-[500px] mt-10'>
                      {["©hardikDesign 2025.", "Website By Hardik.K"].map((item, index) => (
                        <span key={index}>{item}</span>
                      ))}
                    </div>
        </div>
    </div>
  )
}

export default Footer

