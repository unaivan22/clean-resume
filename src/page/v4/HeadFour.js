import React from 'react'

export default function HeadFour() {
  return (
    <div className='grid grid-cols-2 gap-y-2 border-b pb-4 border-zinc-300'>
      <div>
        <h1 contentEditable="true" id='StepName' className='label-content font-bold text-2xl text-zinc-900'>Robert Anthoni</h1>
        <p contentEditable="true" className='font-ligh text-zinc-600 text-sm'>UX Engineer</p>
      </div>
      <div className='label-content flex flex-col text-sm text-zinc-600'>
        <p contentEditable="true">personal email</p>
        <p contentEditable="true">phone</p>
        <p contentEditable="true">website</p>
      </div>
    </div>
  )
}
