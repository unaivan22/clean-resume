import React from 'react'
import HeadNine from './HeadNine'
import ExperienceNine from './ExperienceNine'
import EducationNine from './EducationNine'
import SkillNine from './SkillNine'
import AchievementNine from './AchievementNine'
import SoftwareToolNine from './SoftwareToolNine'

import FloatBtn from '../utils/FloatBtn'
import BackArrow from '../utils/BackArrow'
import Tools from '../utils/Tools'
import Toast from '../utils/Toast'
import MetaResume from '../utils/MetaResume'

export default function VersionNine() {


  function pagesize(){
    document.querySelector("#body").classList.add('A4');
    document.querySelector("#root").classList.add('sheet', 'padding-10mm')
  }  

  return (
    <div id='target' className='V2 mx-auto padding-10mm h-screen'>
      {pagesize()}
      <BackArrow />
      <MetaResume />
      <HeadNine />
      <div className='grid grid-cols-2 gap-x-6'>
        <div>
        <ExperienceNine />
        </div>
        <div className='space-y-8'>
          <EducationNine />
          <AchievementNine />
          <SkillNine />
          <SoftwareToolNine />
        </div>
      </div>
      <FloatBtn />
      <Tools />
      <Toast />
    </div>
  )
}
