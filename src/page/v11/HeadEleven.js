import React from 'react'

export default function HeadEleven() {
  return (
    <div className='grid grid-cols-8 gap-y-2 mx-auto mb-2 border-b border-zinc-100 pb-8'>
     <div className='col-span-5'>
        <h1 contentEditable="true" id='StepName' className='font-bold text-3xl text-zinc-700 label-content'>Richard Stevens </h1>
        <p className='text-zinc-600 font-light text-sm' contentEditable>Leading teams and organizations to the realization of successful outcomes at the intersection of customer needs and business goals.</p>
     </div>
     <div className='text-right mt-2 col-span-3'>
        <p className='text-zinc-500 font-light text-sm' contentEditable>richardstevens.com</p>
        <p className='text-zinc-500 font-light text-sm' contentEditable>hello@richardstevens.com</p>
        <p className='text-zinc-500 font-light text-sm' contentEditable>(310) 555 - 9572</p>
     </div>
    </div>
  )
}
