import React from 'react'
import HeadFour from './HeadFour'
import AboutFour from './AboutFour'
import ExperienceFour from './ExperienceFour'
import EducationFour from './EducationFour'
import SkillFour from './SkillFour'

import FloatBtn from '../utils/FloatBtn'
import BackArrow from '../utils/BackArrow'
import Tools from '../utils/Tools'
import Toast from '../utils/Toast'
import MetaResume from '../utils/MetaResume'
import ThemeChange from '../utils/ThemeChange'

export default function VersionFour() {


  function pagesize(){
    document.querySelector("#body").classList.add('A4');
    document.querySelector("#root").classList.add('sheet', 'padding-15mm')
  }  

  return (
    <div id='target' className='V4 mx-auto padding-10mm '>
      {pagesize()}
      <BackArrow />
      <MetaResume />
      <div id='target' className='paper space-y-8 padding-10mm'>
        <HeadFour />
        <AboutFour />
        <ExperienceFour />
        <EducationFour />
        <SkillFour />
      </div>
      <FloatBtn />
      <Tools />
      <Toast />
      <ThemeChange />
    </div>
  )
}
