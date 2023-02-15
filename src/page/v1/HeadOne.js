import React from 'react'

export default function HeadOne() {
  return (
    <div className='grid grid-cols-1 gap-y-2 border-b pb-4 border-zinc-300'>
      <h1 contentEditable="true" id='StepName' className='label-content font-bold text-4xl text-zinc-900'>Mike O'Connor</h1>
      <div className='label-content flex text-sm text-zinc-600'>
        <p contentEditable="true">UX Engineer</p> <span className='mx-2'>|</span>
        <p contentEditable="true">personal website</p> <span className='mx-2'>|</span>
        <p contentEditable="true">personal email</p> <span className='mx-2'>|</span>
        <p contentEditable="true">phone</p>
      </div>
      <p contentEditable="true" className='flex text-sm font-light text-zinc-600 label-content'>Professional summary - A brief description & summary about you & your professional experience.</p>
    </div>
  )
}
