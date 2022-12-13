import React from 'react'

export default function AboutFour() {
  return (
    <div className='grid grid-cols-7 gap-y-2 border-b pb-4 border-zinc-300'>
      <div className='col-span-2'>
        <h1 contentEditable="true" className='label-content font-bold text-base text-zinc-900'>Profesional Job</h1>
      </div>
      <div className='col-span-5 label-content text-sm font-light text-zinc500'>
        <p contentEditable="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
    </div>
  )
}
