import React from 'react'
import HeadTen from './HeadTen'
import ExperienceTen from './ExperienceTen'
import EducationTen from './EducationTen'
import SkillTen from './SkillTen'
import AchievementTen from './AchievementTen'
import SoftwareToolTen from './SoftwareToolTen'

import FloatBtn from '../utils/FloatBtn'
import BackArrow from '../utils/BackArrow'
import Tools from '../utils/Tools'
import Toast from '../utils/Toast'
import MetaResume from '../utils/MetaResume'

export default function VersionTen() {


  function pagesize(){
    document.querySelector("#body").classList.add('A4');
    document.querySelector("#root").classList.add('sheet', 'padding-20mm')
  }  

  return (
    <div id='target' className='V9 mx-auto padding-20mm h-screen'>
      {pagesize()}
      <BackArrow />
      <MetaResume />
      <HeadTen />
      <div className='grid grid-cols-7 gap-x-12'>
        <div className='col-span-5'>
          <ExperienceTen />
          <EducationTen />
        </div>
        <div className='col-span-2'>
          <SkillTen />
        </div>
      </div>
      {/* <div className='grid grid-cols-2 gap-x-6'>
        <div>
        
        </div>
        <div className='space-y-8'>
          
          <AchievementTen />
          
          <SoftwareToolTen />
        </div>
      </div> */}
      <FloatBtn />
      <Tools />
      <Toast />
    </div>
  )
}
