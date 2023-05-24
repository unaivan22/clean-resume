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
import ThemeChange from '../utils/ThemeChange'

export default function VersionNine() {


  function pagesize(){
    document.querySelector("#body").classList.add('A4');
    document.querySelector("#root").classList.add('sheet', 'padding-20mm')
  }  

  return (
    <div id='target' className='V9 mx-auto padding-20mm'>
      {pagesize()}
      <BackArrow />
      <MetaResume />
      <HeadNine />
      <ExperienceNine />
      <EducationNine />
      {/* <div className='grid grid-cols-2 gap-x-6'>
        <div>
        
        </div>
        <div className='space-y-8'>
          
          <AchievementNine />
          <SkillNine />
          <SoftwareToolNine />
        </div>
      </div> */}
      <FloatBtn />
      <Tools />
      <Toast />
      <ThemeChange />
    </div>
  )
}
