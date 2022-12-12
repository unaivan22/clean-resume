import React from 'react'

export default function HeadThree() {
  return (
    <div className='grid grid-cols-2 mb-4 mx-auto gap-x-4 border-t border-zinc-300 pt-4'>
      <div>
        <h1 contentEditable="true" className='font-bold text-base text-zinc-900 label-content'>Dinivan Nendra Gunawan</h1>
        <p contentEditable="true" className='font-base text-base label-content'>UX Engineer</p>
      </div>
      <div>
        <div className='grid grid-cols-2'>
          <p contentEditable="true" className='label-content text-sm'>personal website</p>
          <p contentEditable="true" className='label-content text-sm'>personal email</p>
        </div>
      </div>
      
    </div>
  )
}
