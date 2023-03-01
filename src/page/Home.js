import React from 'react'
import Footer from './utils/Footer'

// https://dribbble.com/shots/18126526-Protonn-Landing-Page

export default function Home() {
  return (
    <div className='bg-white'>
      <div className="grid place-items-center bg-white 2xl:pt-32 xl:pt-32 md:pt-32 sm:pt-12 xs:pt-12">
        <div className='text-white grid grid-cols-1 text-center sm:px-4 xs:px-4'>
          <h1 className='font-bold xl:text-6xl lg:text-6xl md:text-6xl sm:text-5xl xs:text-5xl mx-auto leading-snug text-zinc-900'>Speed up build of your <br className='2xl:block xl:block md:block sm:hidden xs:hidden' /> ATS-Friendly template resume</h1>
          <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-x-4 gap-y-4  text-center mx-auto mt-12 mb-32'>
            <a href='/templates' className='bg-emerald-600 px-8 py-4 rounded-2xl font-base hover:bg-emerald-900'>View All Templates</a>
            <a href='https://github.com/unaivan22/clean-resume' className='bg-zinc-300 text-zinc-700 px-8 py-4 rounded-2xl font-base hover:bg-zinc-900 hover:text-white'>Clone Templates</a>
          </div>
        </div>
      </div>
      <section className='container mx-auto grid grid-cols-1 2xl:block xl:block md:block sm:hidden xs:hidden'>
          <div className='flex gap-6'>
            <a href='/v1' className='bg-white p-2 rounded-2xl hover:scale-110 transition ease-in-out delay-150 text-center border border-zinc-200'>
              <img className='object-fit ' src='extends/media/ResumeA4-1.jpg' />
              <span className='text-zinc-900 xl:text-medium lg:text-medium md:text-base sm:text-sm xs:text-sm py-12 italic'>Clean Resume</span>
            </a>
            <a href='/v2' className='bg-white p-2 rounded-2xl hover:scale-110 transition ease-in-out delay-150 text-center border border-zinc-200'>
              <img className='object-fit ' src='extends/media/ResumeA4-2.jpg' />
              <span className='text-zinc-900 xl:text-medium lg:text-medium md:text-base sm:text-base xs:text-base py-12 italic'>Slim Resume</span>
            </a>
            <a href='/v3' className='bg-white p-2 rounded-2xl hover:scale-110 transition ease-in-out delay-150 text-center border border-zinc-200'>
              <img className='object-fit' src='extends/media/ResumeA4-3.jpg' />
              <span className='text-zinc-900 xl:text-medium lg:text-medium md:text-base sm:text-base xs:text-base py-12 italic '>Simple Resume</span>
            </a>
            <a href='/v4' className='bg-white p-2 rounded-2xl hover:scale-110 transition ease-in-out delay-150 text-center border border-zinc-200'>
              <img className='object-fit rounded-xl' src='extends/media/ResumeA4-4.jpg' />
              <span className='text-zinc-900 xl:text-medium lg:text-medium md:text-base sm:text-base xs:text-base py-12 italic '>Clear Resume</span>
            </a>
          </div>
      </section>
      <section className='px-4 grid grid-cols-1 2xl:hidden xl:hidden md:hidden sm:block xs:block'>
          <div className='flex gap-4 mobileHome overflow-x-scroll overflow-y-hidden'>
            <a href='/v1' className='bg-white p-2 rounded-2xl text-center border border-zinc-200'>
                <img className='object-fit xl:max-w-full lg:max-w-full sm:max-w-xs xs:max-w-xs ' src='extends/media/ResumeA4-1.jpg' />
                <span className='text-zinc-900 xl:text-medium lg:text-medium md:text-base sm:text-sm xs:text-sm py-12 italic'>Clean Resume</span>
              </a>
              <a href='/v2' className='bg-white p-2 rounded-2xl text-center border border-zinc-200'>
                <img className='object-fit xl:max-w-full lg:max-w-full sm:max-w-xs xs:max-w-xs ' src='extends/media/ResumeA4-2.jpg' />
                <span className='text-zinc-900 xl:text-medium lg:text-medium md:text-base sm:text-base xs:text-base py-12 italic'>Slim Resume</span>
              </a>
              <a href='/v3' className='bg-white p-2 rounded-2xl text-center border border-zinc-200'>
                <img className='object-fit xl:max-w-full lg:max-w-full sm:max-w-xs xs:max-w-xs' src='extends/media/ResumeA4-3.jpg' />
                <span className='text-zinc-900 xl:text-medium lg:text-medium md:text-base sm:text-base xs:text-base py-12 italic '>Simple Resume</span>
              </a>
              <a href='/v4' className='bg-white p-2 rounded-2xl text-center border border-zinc-200'>
                <img className='object-fit xl:max-w-full lg:max-w-full sm:max-w-xs xs:max-w-xs rounded-xl' src='extends/media/ResumeA4-4.jpg' />
                <span className='text-zinc-900 xl:text-medium lg:text-medium md:text-base sm:text-base xs:text-base py-12 italic '>Clear Resume</span>
              </a>
          </div>
      </section>
      <Footer />
    </div>
  )
}
