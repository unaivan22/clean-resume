import React from 'react'

export default function HeadTen() {
  return (
    <div className='grid grid-cols-2 gap-y-2 mx-auto mb-2 border-b border-zinc-300 pb-8'>
     <div>
        <h1 contentEditable="true" id='StepName' className='font-bold text-3xl text-zinc-700 label-content'>Michelle Black </h1>
        <p className='text-zinc-600 font-light text-sm' contentEditable>Digital Product & UX Designer</p>
     </div>
     <div className='text-right mt-2'>
        <p className='text-zinc-500 font-light text-sm' contentEditable>michelleblack.com</p>
        <p className='text-zinc-500 font-light text-sm' contentEditable>hello@michelleblack.com</p>
        <p className='text-zinc-500 font-light text-sm' contentEditable>310 555 - 9572</p>
     </div>
    </div>
  )
}
