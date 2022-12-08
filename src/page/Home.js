import React from 'react'
import Head from './utils/Head'
import Experience from './utils/Experience'
import Education from './utils/Education'
import Skill from './utils/Skill'

import FloatBtn from './utils/FloatBtn'

export default function Home() {
  return (
    <div className='mx-auto padding-10mm bg-zinc-200'>
      <div id='printablediv' className='paper space-y-12 bg-white padding-10mm'>
        <Head />
        <Experience />
        <Education />
        <Skill />
      </div>
      <FloatBtn />
    </div>
  )
}
