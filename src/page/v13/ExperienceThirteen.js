import React from 'react'
import { useState } from "react"
import { TiDelete } from 'react-icons/ti';
import { FaRegDotCircle } from 'react-icons/fa'
import ExperienceItemsTwelve from './ExperienceItems/ExperienceItemsThirteen';

export default function ExperienceThirteen() {
  const [item, setItem] = useState(['div'])
  function addNewRow(){
    const current = [...item];
    current.push('newDiv');
    setItem(current)
  }
  function removeRow(){
    const current = [...item];
    current.pop();
    setItem(current)
  }
  return (
    <div className='grid grid-cols-1 mt-6'>
        <h1 className='font-normal text-sm text-zinc-500 tracking-widest label-content uppercase'>Experience</h1>
        <div className='col-span-5'>
          <div className='grid grid-cols-8 mt-4 mb-4 gap-x-8 gap-y-12'>
            {item?.map((currentItem, index) => {
              return (
                <div key={currentItem} id={`expense-${index}`} className='col-span-2 relative'>
                  <div className='mt-2 dot-checkpoint col-span-1'><FaRegDotCircle color='#6C6B6B' /></div>
                  <div className='col-span-11'>
                    <TiDelete onClick={() => removeRow()} fontSize="1.5em" className='deletebtn float-right text-zinc-600 hover:text-rose-600 offPrint label-content' />
                    <div className='grid flex-col'>
                      <h1 className='font-bold text-md text-lg label-content' contentEditable="true">Apple <span className='font-normal text-zinc-400 text-md label-content ml-2' contentEditable="true">Staff Product Designer</span></h1> 
                      <h1 className='font-base text-zinc-500 text-xs mt-2 label-content' contentEditable="true">January 2018 — Present <span className='ml-4 font-base text-zinc-400 text-xs label-content' contentEditable="true">Palo Alto, CA</span></h1>
                    </div>
                    <div className='flex mt-2 gap-x-6'>
                      <p className='font-normal text-zinc-500 text-sm label-content' contentEditable="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, sodales volutpat augue nunc quisque lorem. Tincidunt viverra fermentum, nunc tortor sollicitudin tortor. </p>
                    </div>
                  </div>
                </div>
              )
            } )}
            <div className='col-span-6'>
              <ExperienceItemsTwelve />
            </div>
          </div>
          <button onClick={() => addNewRow()} className="bg-zinc-800 hover:bg-zinc-900 mt-8 text-white font-normal text-sm py-2 px-4 rounded-xl offPrint label-content">Add Experience</button>
        </div>
      </div>
  )
}
