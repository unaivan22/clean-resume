import React from 'react'
import Head from './utils/Head'
import Experience from './utils/Experience'
import Education from './utils/Education'
import Skill from './utils/Skill'

export default function Home() {
  return (
    <div>
      <div className='space-y-12'>
        <Head />
        <Experience />
        <Education />
        <Skill />
      </div>
    </div>
  )
}
