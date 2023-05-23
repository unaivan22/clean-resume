import React from 'react'
import HeadThirteen from './HeadThirteen'
import ExperienceThirteen from './ExperienceThirteen'

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
    <div id='target' className='V10 mx-auto padding-15mm h-screen'>
      {pagesize()}
      <BackArrow />
      <MetaResume />
      <HeadThirteen />
      <ExperienceThirteen />
      <FloatBtn />
      <Tools />
      <Toast />
      <ThemeChange />
    </div>
  )
}
