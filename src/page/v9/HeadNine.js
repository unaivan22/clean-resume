import React from 'react'

export default function HeadNine() {
  return (
    <div className='grid grid-cols-1 gap-y-2 mb-4 mx-auto border-b border-zinc-100 text-center'>
      <h1 contentEditable="true" id='StepName' className='font-bold text-4xl text-zinc-700 label-content'>Amanda Kim</h1>
      <div className='grid grid-cols-1 text-sm text-zinc-900 label-content'>
        <p  className='label-content space-x-4 text-sm text-zinc-500 font-light'><span contentEditable="true">amandakim.com</span> <span contentEditable="true">hello@amandakim.com</span> <span contentEditable="true">(310) 555 - 9572</span> </p>
        <p  className='label-content text-sm text-zinc-500 my-6 font-light' contentEditable="true">Leading teams and organizations to the realization of successful outcomes at the intersection of customer needs and business goals.</p>
      </div>
    </div>
  )
}
