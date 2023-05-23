import React from 'react'

export default function HeadThirteen() {
  return (
    <div className='grid grid-cols-8 gap-x-8 mx-auto mb-2'>
     <div className='col-span-2'>
        <h1 contentEditable="true" id='StepName' className='font-bold text-3xl text-zinc-700 label-content text-right'>Allyson Rodriguez</h1>
     </div>
     <div className='text-left mt-2 col-span-6 border-b border-zinc-100 pb-8'>
       <p className='text-zinc-600 font-light text-sm' contentEditable>Leading teams and organizations to the realization of successful outcomes at the intersection of customer needs and business goals.</p>
        <div className='flex flex-row space-x-4 mt-2'>
        <p className='text-zinc-500 font-light text-xs' contentEditable>christaylor.com</p>
        <p className='text-zinc-500 font-light text-xs' contentEditable>hello@christaylor.com</p>
        <p className='text-zinc-500 font-light text-xs' contentEditable>(310) 555 - 9572</p>
        </div>
     </div>
    </div>
  )
}
