import React from 'react'
import HeadFive from './HeadFive'
import ExperienceFive from './ExperienceFive'
import EducationFive from './EducationFive'
import SkillFive from './SkillFive'

import FloatBtn from '../utils/FloatBtn'
import BackArrow from '../utils/BackArrow'
import Tools from '../utils/Tools'
import Toast from '../utils/Toast'
import MetaResumeLandscape from '../utils/MetaResumeLandscape'
import ThemeChange from '../utils/ThemeChange'

export default function VersionFive() {


  function pagesize(){
    document.querySelector("#body").classList.add('legal', 'landscape');
    document.querySelector("#root").classList.add('sheet', 'padding-15mm')
  }  

  return (
    <div className='mx-auto padding-10mm'>
      {pagesize()}
      <BackArrow />
      <MetaResumeLandscape />
      <div id='target' className='paper space-y-8 padding-10mm'>
        <HeadFive />
        <ExperienceFive />
        <EducationFive />
        <SkillFive />
      </div>
      <FloatBtn />
      <Tools />
      <Toast />
      <ThemeChange />
    </div>
  )
}
