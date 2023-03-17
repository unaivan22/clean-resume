import React from 'react'
import HeadSeven from './HeadSeven'
import ExperienceSeven from './ExperienceSeven'
import EducationSeven from './EducationSeven'
import SkillSeven from './SkillSeven'
import AchievementSeven from './AchievementSeven'
import SoftwareToolSeven from './SoftwareToolSeven'

import FloatBtn from '../utils/FloatBtn'
import BackArrow from '../utils/BackArrow'
import Tools from '../utils/Tools'
import Toast from '../utils/Toast'
import MetaResume from '../utils/MetaResume'

export default function VersionSeven() {


  function pagesize(){
    document.querySelector("#body").classList.add('A4');
    document.querySelector("#root").classList.add('sheet', 'padding-10mm')
  }  

  return (
    <div id='target' className='V2 mx-auto padding-10mm h-screen'>
      {pagesize()}
      <BackArrow />
      <MetaResume />
      <HeadSeven />
      <div className='grid grid-cols-2 gap-x-6'>
        <div>
        <ExperienceSeven />
        </div>
        <div className='space-y-8'>
          <EducationSeven />
          <AchievementSeven />
          <SkillSeven />
          <SoftwareToolSeven />
        </div>
      </div>
      <FloatBtn />
      <Tools />
      <Toast />
    </div>
  )
}
