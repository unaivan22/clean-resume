import React from 'react'
import { useState } from "react"

export default function AboutThree() {
  return (
    <div>
      <div className='grid grid-cols-1 mx-auto'>
        <h1 className='uppercase font-bold mb-4 tracking-widest label-content'>About</h1>
        <div className='space-y-6'>
            <div className='grid grid-cols-1'>
                <h1 className='font-base mb-2' contentEditable="true">Specialties</h1>
                <div className='grid grid-cols-2 gap-y-2 gap-x-4'>
                    <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">Cross-platform human interface design and design systems</p>
                    <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">Research, prototyping, interaction design and user testing</p>
                </div>
            </div>
            <div className='grid grid-cols-1'>
                <h1 className='font-base mb-2' contentEditable="true">Tools</h1>
                <div className='grid grid-cols-2 gap-y-2 gap-x-4'>
                    <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">Figma, Sketch, Framer, Principle, Illustrator, Photoshop, After Effects</p>
                    <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">Origami, HTML/CSS, JS/React, Git, SwiftUI</p>
                </div>
            </div>
            <div className='grid grid-cols-1'>
                <h1 className='font-base mb-2' contentEditable="true">Languages</h1>
                <div className='grid grid-cols-2 gap-y-2 gap-x-4'>
                    <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">English (Bilingual)</p>
                    <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">Italian (Bilingual)</p>
                </div>
            </div>
            <div className='grid grid-cols-1'>
                <h1 className='font-base mb-2' contentEditable="true">Education</h1>
                <div className='grid grid-cols-1'>
                    <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">University of Tirana</p>
                    <p className='text-zinc-500 font-light text-xs label-content' contentEditable="true">Bsc. Computer Science</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
