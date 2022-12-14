import React from 'react'
import HeadTwo from './HeadTwo'
import ExperienceTwo from './ExperienceTwo'
import EducationTwo from './EducationTwo'
import SkillTwo from './SkillTwo'

import FloatBtn from '../utils/FloatBtn'
import BackArrow from '../utils/BackArrow'
import Tools from '../utils/Tools'
import Toast from '../utils/Toast'
import MetaResume from '../utils/MetaResume'

export default function VersionTwo() {


  function pagesize(){
    document.querySelector("#body").classList.add('A4');
    document.querySelector("#root").classList.add('sheet', 'padding-15mm')
  }  

  return (
    <div id='target' className='V2 mx-auto padding-10mm h-screen'>
      {pagesize()}
      <BackArrow />
      <MetaResume />
      <div className='grid grid-cols-7 gap-x-12'>
        <div className='space-y-12 col-span-3'>
          <HeadTwo />
          <SkillTwo />
        </div>
        <div className='space-y-12 col-span-4'>
          <ExperienceTwo />
          <EducationTwo />
        </div>
      </div>
      <FloatBtn />
      <Tools />
      <Toast />
    </div>
  )
}
