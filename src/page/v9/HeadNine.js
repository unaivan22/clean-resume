import React from 'react'

export default function HeadNine() {
  return (
    <div className='grid grid-cols-1 gap-y-2 mb-4 mx-auto border-b border-zinc-300 pb-8'>
      <h1 contentEditable="true" id='StepName' className='font-bold text-2xl text-zinc-700 label-content'>Full Name Goes Here</h1>
      <div className='grid grid-cols-1 text-sm text-zinc-900 label-content'>
        <p  className='label-content text-base'><span contentEditable="true">Job Title</span> | <span contentEditable="true">Link to personal website</span></p>
        <p  className='label-content text-zinc-400' contentEditable="true">I build products that delight customers through a blend of frontend engineering and design experience. My speciality lies in consumer-facing fintech products.</p>
      </div>
    </div>
  )
}
