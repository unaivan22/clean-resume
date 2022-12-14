import React from 'react'
import Templates from './data/Templates'
import { Tab } from '@headlessui/react'
import PortraitTemplate from './data/PortraitTemplate'

// https://beta.reactjs.org/learn/rendering-lists

export default function AllTemplates() {
  return (
    <div className="grid place-items-center bg-zinc-100 pt-32 pb-52">
      <div className='text-zinc-900 grid grid-cols-1 text-center sm:px-12 xs:px-12'>
        <h1 className='font-bold xl:text-6xl lg:text-6xl md:text-6xl sm:text-5xl xs:text-5xl mx-auto leading-snug '>All templates that you<br /> might be able to use</h1>
        <div className='grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-x-4 gap-y-4  text-center mx-auto mt-12 mb-32'>
          <a href='https://github.com/unaivan22/clean-resume' className='bg-emerald-600 px-8 py-4 text-white rounded-2xl font-base hover:bg-emerald-900'>Clone Templates</a>
        </div>
        
      </div>
      <Tab.Group>
        <Tab.List className='flex gap-x-4 mb-12'>
          <Tab className="bg-zinc-200 text-zinc-700 font-bold py-2 px-4 rounded-full">All</Tab>
          <Tab className="bg-zinc-200 text-zinc-700 font-bold py-2 px-4 rounded-full">Portrait</Tab>
          <Tab className="bg-zinc-200 text-zinc-700 font-bold py-2 px-4 rounded-full">Landscape</Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <Templates />
          </Tab.Panel>
          <Tab.Panel>
            <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 gap-x-4 gap-y-4 lg:px-24 xl:px-24 md:px-24 sm:px-6 xs:px-6'>
              <PortraitTemplate />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            Landscape
          </Tab.Panel>
        </Tab.Panels>
    </Tab.Group>
    </div>
  )
}
