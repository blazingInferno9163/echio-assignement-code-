import React from 'react'
import logo1 from '../assets/Rectangle 422.png'
import logo2 from '../assets/Rectangle 433.png'
import logo3 from '../assets/Rectangle 440.png'
import logo4 from '../assets/Rectangle 441.png'
import logo5 from '../assets/Rectangle 442.png'
import logo6 from '../assets/Rectangle 443.png'
const LogoSection = () => {
  return (
    <div className='flex justify-between bg-[#000] py-10'>
        <img src={logo2} className='md:w-[200px] w-[49px]' alt='logo1'/>
        <img src={logo3} className='md:w-[200px] w-[49px]' alt='logo1'/>
        <img src={logo1} className='md:w-[200px] w-[49px]' alt='logo1'/>
        <img src={logo6} className='md:w-[200px] w-[49px]' alt='logo1'/>
        <img src={logo4} className='md:w-[200px] w-[49px]' alt='logo1'/>
        <img src={logo5} className='md:w-[200px] w-[49px]' alt='logo1'/>
    </div>
  )
}

export default LogoSection