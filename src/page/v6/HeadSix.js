import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import { BsLaptop } from 'react-icons/bs';




export default function HeadSix() {
  return (
    <div className='grid grid-cols-5 gap-y-2 pb-4 '>
      <div className='col-span-3'>
        <h1 contentEditable="true" id='StepName' className='label-content font-bold text-5xl text-zinc-800'>Your Name Here</h1>
      </div>
      <div className=' col-span-2 label-content flex flex-col text-sm text-zinc-600 space-y-2'>
        <div className='flex items-center space-x-2'>
          <HiOutlineMail size={22} /> <p contentEditable="true">your_email_address@gmail.com</p>
        </div>
        <div className='flex items-center space-x-2'>
          <FaLinkedin size={22} /> <p contentEditable="true">linkedin.com/in/your_linkedin</p>
        </div>
        <div className='flex items-center space-x-2'>
          <BsLaptop size={22} /> <p contentEditable="true">yourportfoliowebsite.com</p>
        </div>
      </div>
    </div>
  )
}
