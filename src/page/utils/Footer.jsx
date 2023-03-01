import React from 'react'

export default function Footer() {
  return (
    <div className='bg-slate-50 mt-32'>
        <div className='container mx-auto py-6 grid gap-x-4'>
            <p className='text-slate-500 text-sm xs:text-center sm:text-center md:text-left lg:text-left'>© <span>{(new Date().getFullYear())}</span> Crafted by <span className='text-zinc-900 underline'><a href='https://dinivannendragunawan.vercel.app/'>Dinivan Nendra</a></span> build with reactjs, tailwind, headlessUI </p>
        </div>
    </div>
  )
}
