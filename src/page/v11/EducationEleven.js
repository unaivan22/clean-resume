import React from 'react'
import { useState } from "react"
import { TiDelete } from 'react-icons/ti';

export default function EducationEleven() {
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
    <div className='grid grid-cols-1 mt-24'>
        <h1 className='font-normal text-sm text-zinc-500 tracking-widest label-content'>Education</h1>
        <div className='col-span-5'>
          <div className='grid grid-cols-1 mt-4 mb-12 gap-x-8 gap-y-12'>
            {item?.map((currentItem, index) => {
              return (
                <div key={currentItem} id={`expense-${index}`}>
                  <div>
                    <TiDelete onClick={() => removeRow()} fontSize="1.5em" className='deletebtn float-right text-zinc-600 hover:text-rose-600 offPrint label-content' />
                    <div className='grid flex-col'>
                      <h1 className='font-bold text-md text-lg label-content' contentEditable="true">B.S. Human Computer Interaction </h1> 
                      <div className='grid grid-cols-1 mt-2'>
                        <h1 className='font-base text-zinc-500 text-xs label-content' contentEditable="true">January 2006 — 2010 <span className='ml-2'>Rhode Island School of Design (RISD)</span> </h1>
                      </div>
                    </div>
                  </div>
                </div>
              )
            } )}
          </div>
          <button onClick={() => addNewRow()} className="bg-zinc-800 hover:bg-zinc-900 text-white font-normal text-sm py-2 px-4 rounded-xl offPrint label-content">Add Education</button>
        </div>
      </div>
  )
}
