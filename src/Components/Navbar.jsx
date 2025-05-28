import React, { useEffect, useState } from 'react'
import '../../src/index.css'
import { FaSlack } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar() {

  const[sticky,setSticky] = useState(false);

  useEffect(() =>{
    window.addEventListener('scroll',() =>{
      window.scrollY > 1000 ? setSticky(true) : setSticky(false)
    })
  },[]);


  return (
    <div className={`fixed z-[999] w-full px-20 py-1 font-['Montreal'] flex justify-between items-center ${sticky ? 'dark-nav' : ""}`}>
      <div className='logo'>
        <img className='w-20' src="At0mwebsiteWhite.png" alt="" />
      </div>
      <div className='links flex gap-10 tracking-tight'>
        {["Portfolio"].map((item,index) => {
            return <Link to="navbar" smooth={true} duration={2000} offset={-50}  key={index} className={`text-xl cursor-pointer font-light ${index === 1 ? "ml-96" : ""}`}>{item}</Link>
        })} 
      </div>
    </div>
  )
}

export default Navbar
