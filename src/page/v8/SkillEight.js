import React from 'react'
import { useState } from "react"
import { TiDelete } from 'react-icons/ti';

export default function SkillSeven() {
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
    <div className='grid grid-cols-7 mt-6 space-x-12'>
        <h1 className='font-bold text-zinc-500 tracking-widest label-content col-span-1'>Skills</h1>
        <div className='col-span-6'>
          <div className='flex flex-row gap-4 flex-wrap'>
            {item?.map((currentItem, index) => {
              return (
                <div key={currentItem} id={`expense-${index}`} className='relative'>
                   <TiDelete onClick={() => removeRow()} fontSize="1.5em" className='right-0 text-rose-400 hover:text-rose-600 top-0 offPrint label-content absolute' />
                   <div class="bg-zinc-200 text-zinc-900 font-bold py-2 px-4 rounded-lg w-fit" contentEditable="true">
                      Javascript
                    </div>
                </div>
              )
            } )}
          </div>
          <button onClick={() => addNewRow()} className="bg-zinc-800 hover:bg-zinc-900 text-white font-normal text-sm py-2 px-4 rounded-xl offPrint label-content mt-12">Add Skill</button>
        </div>
    </div>
  )
}
