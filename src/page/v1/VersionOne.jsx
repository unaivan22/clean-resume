import React from 'react'
import HeadOne from './HeadOne'
import ExperienceOne from './ExperienceOne'
import EducationOne from './EducationOne'
import SkillOne from './SkillOne'

import FloatBtn from '../utils/FloatBtn'
import BackArrow from '../utils/BackArrow'
import Tools from '../utils/Tools'
import Toast from '../utils/Toast'
import MetaResume from '../utils/MetaResume'
import ThemeChange from '../utils/ThemeChange'

export default function VersionOne() {


  function pagesize(){
    document.querySelector("#body").classList.add('A4');
    document.querySelector("#root").classList.add('sheet', 'padding-15mm')
  }  

  return (
    <div className='mx-auto padding-10mm '>
      {pagesize()}
      <BackArrow />
      <MetaResume />
      <div id='target' className='paper space-y-4 padding-10mm'>
        <HeadOne />
        <ExperienceOne />
        <EducationOne />
        <SkillOne />
      </div>
      <FloatBtn />
      <Tools />
      <Toast />
      <ThemeChange />
    </div>
  )
}
