import React from 'react'

export default function HeadTwo() {
  return (
    <div className='grid grid-cols-1 gap-y-2 mb-4 mx-auto px-12'>
      <h1 contentEditable="true" className='font-bold text-4xl text-zinc-900'>Dinivan Nendra Gunawan</h1>
      <div className='grid grid-cols-1 text-sm text-zinc-900'>
        <p contentEditable="true" className='font-bold text-xl'>UX Engineer</p>
        <p contentEditable="true">personal website</p>
        <p contentEditable="true">personal email</p>
        <p contentEditable="true">phone</p>
      </div>
    </div>
  )
}
