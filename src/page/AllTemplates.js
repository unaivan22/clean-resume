import React from 'react'
import Templates from './data/Templates'
import { Tab } from '@headlessui/react'
import PortraitTemplate from './data/PortraitTemplate'
import LandscapeTemplate from './data/LandscapeTemplate'
import { Fragment } from 'react'
import AnimatedPage from './utils/AnimatedPage'

// https://beta.reactjs.org/learn/rendering-lists

export default function AllTemplates() {
  return (
    <AnimatedPage>
      <div className="grid place-items-center bg-white pt-32 pb-52 min-h-screen">
        <div className='text-white grid grid-cols-1 text-center sm:px-4 xs:px-4'>
          <h1 className='font-bold xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl xs:text-4xl mx-auto leading-snug text-zinc-900'>ATS-Friendly templates that speed up <br className='2xl:block xl:block md:block sm:hidden xs:hidden' /> creating your resume</h1>
          <div className='grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-x-4 gap-y-4  text-center mx-auto mt-12 mb-12'>
            {/* <a href='https://github.com/unaivan22/clean-resume' className='bg-emerald-600 px-8 py-4 text-white rounded-2xl font-base hover:bg-emerald-900'>Clone Templates</a> */}
          </div>
          
        </div>
        <Tab.Group>
          <Tab.List className='flex gap-x-4 mb-12'>
            
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'bg-amber-100 font-bold px-6 py-2 rounded-full text-amber-800 xl:text-lg lg:text-lg md:text-lg sm:text-sm xs:text-sm focus:outline-none focus:ring focus:ring-amber-200' : 'px-6 py-2 text-gray-500 text-lg xl:text-lg lg:text-lg md:text-lg sm:text-sm xs:text-sm'
                  }
                >
                  All Templates
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'bg-amber-100 font-bold px-6 py-2 rounded-full text-amber-800 xl:text-lg lg:text-lg md:text-lg sm:text-sm xs:text-sm focus:outline-none focus:ring focus:ring-amber-200' : 'px-6 py-2 text-gray-500 text-lg xl:text-lg lg:text-lg md:text-lg sm:text-sm xs:text-sm'
                  }
                >
                  Portrait
                </button>
              )}
            </Tab>

            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={
                    selected ? 'bg-amber-100 font-bold px-6 py-2 rounded-full text-amber-800 xl:text-lg lg:text-lg md:text-lg sm:text-sm xs:text-sm focus:outline-none focus:ring focus:ring-amber-200' : 'px-6 py-2 text-gray-500 text-lg xl:text-lg lg:text-lg md:text-lg sm:text-sm xs:text-sm'
                  }
                >
                  Landscape
                </button>
              )}
            </Tab>
            
          </Tab.List>

          <Tab.Panels>
            <Tab.Panel>
              <Templates />
            </Tab.Panel>
            <Tab.Panel>
              <div>
                <PortraitTemplate />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <LandscapeTemplate />
            </Tab.Panel>
          </Tab.Panels>
      </Tab.Group>
      </div>
    </AnimatedPage>
  )
}
