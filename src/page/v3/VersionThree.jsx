import React from 'react'
import HeadThree from './HeadThree'
import ExperienceThree from './ExperienceThree'
import EducationThree from './EducationThree'
import AboutThree from './AboutThree'
import LinkThree from './LinkThree'

import FloatBtn from '../utils/FloatBtn'
import BackArrow from '../utils/BackArrow'
import Tools from '../utils/Tools'
import Toast from '../utils/Toast'

export default function VersionThree() {


  function pagesize(){
    document.querySelector("#body").classList.add('A4');
    document.querySelector("#root").classList.add('sheet', 'padding-15mm')
  }  

  return (
    <div id='target' className='V3 mx-auto padding-10mm h-screen'>
      {pagesize()}
      <BackArrow />
      <div className='grid grid-cols-1 gap-x-12'>
        <div className='space-y-12'>
          <HeadThree />
        </div>
        <div className='grid grid-cols-2 mt-6 border-t border-zinc-300 pt-4 gap-x-6'>
          <ExperienceThree />
          <div className='space-y-12'>
            <AboutThree />
            <LinkThree />
          </div>
        </div>
      </div>
      <FloatBtn />
      <Tools />
      <Toast />
    </div>
  )
}
