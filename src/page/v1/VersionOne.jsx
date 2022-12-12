import React from 'react'
import HeadOne from './HeadOne'
import ExperienceOne from './ExperienceOne'
import EducationOne from './EducationOne'
import SkillOne from './SkillOne'

import FloatBtn from '../utils/FloatBtn'
import BackArrow from '../utils/BackArrow'
import Tools from '../utils/Tools'

export default function VersionOne() {


  function pagesize(){
    document.querySelector("#body").classList.add('A4');
    document.querySelector("#root").classList.add('sheet', 'padding-15mm')
  }  

  return (
    <div className='mx-auto padding-10mm bg-zinc-200'>
      {pagesize()}
      <BackArrow />
      <div id='target' className='paper space-y-4 bg-white padding-10mm'>
        <HeadOne />
        <ExperienceOne />
        <EducationOne />
        <SkillOne />
      </div>
      <FloatBtn />
      <Tools />
    </div>
  )
}
