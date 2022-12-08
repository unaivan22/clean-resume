import React from 'react'

export default function Head() {
  return (
    <div id='idHead' className='grid grid-cols-1 gap-y-2 border-b pb-4 border-zinc-300'>
      <h1 contentEditable="true" className='font-bold text-4xl text-zinc-900'>Dinivan Nendra Gunawan</h1>
      <div className='flex text-sm text-zinc-600'>
        <p contentEditable="true">UI/UX Designer</p> <span className='mx-2'>|</span>
        <p contentEditable="true">google.com</p> <span className='mx-2'>|</span>
        <p contentEditable="true">email@mail.com</p> <span className='mx-2'>|</span>
        <p contentEditable="true">+629012301230103</p>
      </div>
      <p contentEditable="true" className='flex text-sm font-light text-zinc-600'>Professional summary - A brief description & summary about you & your professional experience.</p>
    </div>
  )
}
