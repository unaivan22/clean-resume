import React from 'react'
import HeadEleven from './HeadEleven'
import ExperienceEleven from './ExperienceEleven'
import EducationEleven from './EducationEleven'
import SkillEleven from './SkillEleven'
import SoftwareTollsEleven from './SoftwareEleven'
import HobbiesEleven from './HobbiesEleven'

import FloatBtn from '../utils/FloatBtn'
import BackArrow from '../utils/BackArrow'
import Tools from '../utils/Tools'
import Toast from '../utils/Toast'
import MetaResume from '../utils/MetaResume'
import ThemeChange from '../utils/ThemeChange'

export default function VersionEleven() {


  function pagesize(){
    document.querySelector("#body").classList.add('A4');
    document.querySelector("#root").classList.add('sheet', 'padding-15mm')
  }  

  return (
    <div id='target' className='V10 mx-auto padding-15mm'>
      {pagesize()}
      <BackArrow />
      <MetaResume />
      <HeadEleven />
      <SkillEleven />
      <ExperienceEleven />
      <EducationEleven />
      <FloatBtn />
      <Tools />
      <Toast />
      <ThemeChange />
    </div>
  )
}
