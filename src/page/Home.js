import React from 'react'
import Head from './utils/Head'
import Experience from './utils/Experience'
import Education from './utils/Education'
import Skill from './utils/Skill'

export default function Home() {
  return (
    <div className='mx-auto p-32 bg-zinc-200'>
      <div id='printablediv' className='paper space-y-24 bg-white py-24 px-12'>
        <Head />
        <Experience />
        <Education />
        <Skill />
      </div>
    </div>
  )
}
