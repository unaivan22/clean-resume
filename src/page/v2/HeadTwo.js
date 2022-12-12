import React from 'react'

export default function HeadTwo() {
  return (
    <div className='grid grid-cols-1 gap-y-2 mb-4 mx-auto px-12'>
      <h1 contentEditable="true" className='font-bold text-4xl text-zinc-900 label-content'>Dinivan Nendra Gunawan</h1>
      <div className='grid grid-cols-1 text-sm text-zinc-900 label-content'>
        <p contentEditable="true" className='font-bold text-xl label-content'>UX Engineer</p>
        <p contentEditable="true" className='label-content text-base'>personal website</p>
        <p contentEditable="true" className='label-content text-base'>personal email</p>
        <p contentEditable="true" className='label-content text-base'>phone</p>
      </div>
    </div>
  )
}
