import React from 'react'
import HeadThirteen from './HeadThirteen'
import ExperienceThirteen from './ExperienceThirteen'
import EducationThirteen from './EducationThirteen'

import FloatBtn from '../utils/FloatBtn'
import BackArrow from '../utils/BackArrow'
import Tools from '../utils/Tools'
import Toast from '../utils/Toast'
import MetaResume from '../utils/MetaResume'
import ThemeChange from '../utils/ThemeChange'

export default function VersionThirteen() {


  function pagesize(){
    document.querySelector("#body").classList.add('A4');
    document.querySelector("#root").classList.add('sheet', 'padding-15mm')
  }  

  return (
    <div id='target' className='V10 mx-auto padding-15mm'>
      {pagesize()}
      <BackArrow />
      <MetaResume />
      <HeadThirteen />
      <div className='grid grid-cols-8'>
        <div className='col-span-2'></div>
        <div className='col-span-6'>
          <ExperienceThirteen />
        </div>
      </div>
      <div className='grid grid-cols-8'>
        <div className='col-span-2'></div>
        <div className='col-span-6'>
          <EducationThirteen />
        </div>
      </div>
      <FloatBtn />
      <Tools />
      <Toast />
      <ThemeChange />
    </div>
  )
}
