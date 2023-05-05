import React from 'react'
import HeadEight from './HeadEight'
import ExperienceEight from './ExperienceEight'
import EducationEight from './EducationEight'
import SkillEight from './SkillEight'
import AchievementEight from './AchievementEight'
import SoftwareToolEight from './SoftwareToolEight'

import FloatBtn from '../utils/FloatBtn'
import BackArrow from '../utils/BackArrow'
import Tools from '../utils/Tools'
import Toast from '../utils/Toast'
import MetaResume from '../utils/MetaResume'

export default function VersionEight() {


  function pagesize(){
    document.querySelector("#body").classList.add('A4');
    document.querySelector("#root").classList.add('sheet', 'padding-10mm')
  }  

  return (
    <div id='target' className='V2 mx-auto padding-10mm h-screen'>
      {pagesize()}
      <BackArrow />
      <MetaResume />
      <HeadEight />
      <ExperienceEight />
      <EducationEight />
      <SkillEight />
      {/* <div className='grid grid-cols-1 gap-x-6'>
        <div>
        
        </div>
        <div className='space-y-8'>
          
          <AchievementEight />
          
          <SoftwareToolEight />
        </div>
      </div> */}
      <FloatBtn />
      <Tools />
      <Toast />
    </div>
  )
}
