import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

export default function BackArrow() {
  const navigate = useNavigate();
  return (
    <div className='fixed top-12 right-12 offPrint'>
        <div className='grid grid-cols-1 gap-y-4'>
            <a onClick={() => navigate(-1)} class="w-14 h-14 rounded-full  bg-black text-white text-center inline-flex items-center px-3 py-2.5  mr-2 mb-2">
               <IoMdArrowRoundBack size={42} />
            </a>
        </div>
    </div>
  )
}