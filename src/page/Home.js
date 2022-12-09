import React from 'react'

// https://dribbble.com/shots/18126526-Protonn-Landing-Page

export default function Home() {
  return (
    <div className="grid place-items-center bg-zinc-900 pt-32 pb-52">
      <div className='text-white grid grid-cols-1 text-center sm:px-12 xs:px-12'>
        <h1 className='font-bold xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl xs:text-4xl mx-auto leading-snug '>I build resume template <br /> that you might be able to use</h1>
        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-x-4 gap-y-4  text-center mx-auto mt-12 mb-32'>
          <a href='/' className='bg-emerald-600 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-900'>View All Templates</a>
          <a href='https://github.com/unaivan22/clean-resume' className='bg-emerald-600 px-8 py-4 rounded-2xl font-bold hover:bg-emerald-900'>Clone Templates</a>
        </div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 gap-x-4 gap-y-4 xl:-rotate-6 lg:-rotate-6 md:-rotate-6 sm:rotate-0 xs:rotate-0 lg:px-24 xl:px-24 md:px-24 sm:px-6 xs:px-6'>
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
