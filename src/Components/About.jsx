import React from 'react'

function About() {
  return (
    <div className='w-full px-20 py-20 leading-[4.1vw] bg-[#cdea68] rounded-t-2xl text-[#212121] font-[Montreal]'>
    <div className='max-w-[80%]'>
      <h1 className='font-regular text-7xl tracking-tight text-left'>Hardik is a 3D animation artist crafting bold visuals for brands, creators, and storytellers who want to stand out, evoke emotion, and turn ideas into unforgettable motion.</h1>
    </div>
    <div className='border-t-[1px] mt-20 border-[#212121]'>
        <div className='flex justify-between text-xl mt-10'>
          <p>What you can expect:</p>
          <div className='max-w-[16%] flex flex-col gap-10 leading-none ml-52'>
            <p>I collaborate with agencies, brands, and creators who want more than just visuals — they want movement that tells a story, design that sticks, and animation that makes people pause.</p>
            <p>Expect a mix of cinematic flair, strategic thinking, and technical polish — brought together through frames, motion, and a deep love for the craft (plus a bit of coffee).</p>
          </div>
            <div className='flex flex-col items-start mt-32 leading-none mr-52'>
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
        </div>
<div className='w-full border-t-[1px] mt-20 border-[#212121] pt-20'>
  <h1 className='text-7xl mb-10'>Render Gallery.</h1>
  
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {[
          "/Portfolio_Pro/Redbull.png",
          "/Portfolio_Pro/Desolation.png",
          "/Portfolio_Pro/Apple.png",
          "/Portfolio_Pro/5th.png",
          "/Portfolio_Pro/Rear.png",
          "/Portfolio_Pro/RedFront.png",
        ].map((src, index) => (
          <div key={index} className='w-full h-[60vh] bg-[#b0c859] rounded-2xl overflow-hidden'>
            <img className='w-full h-full object-cover' src={src} alt={`Render ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default About
