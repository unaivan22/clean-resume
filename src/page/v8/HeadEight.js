import React from 'react'

export default function HeadSeven() {
  return (
    <div className='grid grid-cols-2 gap-y-2 mb-4 mx-auto border-b border-zinc-300 pb-8'>
     <div>
        <h1 contentEditable="true" id='StepName' className='font-bold text-3xl text-zinc-700 label-content'>Dinivan Nendra </h1>
        <p className='text-zinc-600 text-sm' contentEditable>Frontend, UI/UX Designer</p>
     </div>
     <div className='text-right mt-2'>
        <p className='text-zinc-600 text-sm' contentEditable>Surabaya, Indonesia</p>
        <p className='text-zinc-600 text-sm' contentEditable>dinivannendragunawan@gmail.com</p>
     </div>
    </div>
  )
}
