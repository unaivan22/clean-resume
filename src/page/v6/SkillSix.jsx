import React from 'react'
import SkillsSixSkills from './skillsSix/SkillsSixSkills'
import SkillsSixTools from './skillsSix/SkillsSixTools'
import SkillsSixAwards from './skillsSix/SkillsSixAwards'

export default function SkillSix() {
  return (
    <div className='grid grid-cols-3 gap-x-4'>
      <SkillsSixSkills />
      <SkillsSixTools />
      <SkillsSixAwards />
    </div>
  )
}
