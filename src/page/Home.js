import React from 'react'

// https://dribbble.com/shots/18126526-Protonn-Landing-Page

export default function Home() {
  return (
    <div className="grid place-items-center bg-zinc-900 pt-32 pb-52">
      <div className='text-white grid grid-cols-1 text-center sm:px-6 xs:px-6'>
        <h1 className='font-bold text-6xl w-full mx-auto'>I build resume templates <br /> that you might be able to use</h1>
        <div className='grid grid-cols-2 gap-x-4 text-center mx-auto mt-12 mb-32'>
          <a href='/' className='bg-emerald-600 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-900'>View All Templates</a>
          <a href='https://github.com/unaivan22/clean-resume' className='bg-emerald-600 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-900'>Clone Templates</a>
        </div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 gap-x-4 gap-y-4 xl:-rotate-6 lg:-rotate-6 md:-rotate-6 sm:rotate-0 xs:rotate-0 px-24'>
          <a href='/v1' className='bg-white p-2 rounded-2xl hover:scale-125 transition ease-in-out delay-150'>
            <img className='object-fit ' src='extends/media/ResumeA4-1.png' />
            <span className='text-zinc-900 font-medium py-12'>Clean Resume</span>
          </a>
          <a href='/' className='bg-white p-2 rounded-2xl hover:scale-125 transition ease-in-out delay-150'>
            <img className='object-fit ' src='extends/media/ResumeA4-1.png' />
            {/* <span className='text-zinc-900 font-medium py-12'>Clean Resume</span> */}
          </a>
          <a href='/' className='bg-white p-2 rounded-2xl hover:scale-125 transition ease-in-out delay-150'>
            <img className='object-fit ' src='extends/media/ResumeA4-1.png' />
            {/* <span className='text-zinc-900 font-medium py-12'>Clean Resume</span> */}
          </a>
          <a href='/' className='bg-white p-2 rounded-2xl hover:scale-125 transition ease-in-out delay-150'>
            <img className='object-fit ' src='extends/media/ResumeA4-1.png' />
            {/* <span className='text-zinc-900 font-medium py-12'>Clean Resume</span> */}
          </a>
        </div>
      </div>
    </div>
  )
}
