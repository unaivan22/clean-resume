import React from 'react'
import HeadTen from './HeadTen'
import ExperienceTen from './ExperienceTen'
import EducationTen from './EducationTen'
import SkillTen from './SkillTen'
import SoftwareTollsTen from './SoftwareTollsTen'
import HobbiesTen from './HobbiesTen'

import FloatBtn from '../utils/FloatBtn'
import BackArrow from '../utils/BackArrow'
import Tools from '../utils/Tools'
import Toast from '../utils/Toast'
import MetaResume from '../utils/MetaResume'
import ThemeChange from '../utils/ThemeChange'

export default function VersionTen() {


  function pagesize(){
    document.querySelector("#body").classList.add('A4');
    document.querySelector("#root").classList.add('sheet', 'padding-15mm')
  }  

  return (
    <div id='target' className='V10 mx-auto padding-15mm'>
      {pagesize()}
      <BackArrow />
      <MetaResume />
      <HeadTen />
      <div className='grid grid-cols-9 gap-x-12'>
        <div className='col-span-6'>
          <ExperienceTen />
          <EducationTen />
        </div>
        <div className='col-span-3'>
          <SkillTen />
          <SoftwareTollsTen />
          <HobbiesTen />
        </div>
      </div>
      <FloatBtn />
      <Tools />
      <Toast />
      <ThemeChange />
    </div>
  )
}
