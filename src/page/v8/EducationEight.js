import React from 'react'
import { useState } from "react"
import { TiDelete } from 'react-icons/ti';

export default function EducationSeven() {
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
    <div className='grid grid-cols-7 mt-6 space-x-12 mb-24'>
        <h1 className='font-bold text-zinc-500 tracking-widest label-content col-span-1'>Education</h1>
        <div className='col-span-6'>
          <div className='grid grid-cols-1'>
            {item?.map((currentItem, index) => {
              return (
                <div key={currentItem} id={`expense-${index}`}>
                  <TiDelete onClick={() => removeRow()} fontSize="1.5em" className='float-right text-zinc-600 hover:text-rose-600 offPrint label-content' />
                  <div className='grid grid-cols-7 mb-12'>
                    <div className='col-span-2'>
                      <h1 className='font-bold text-md text-md label-content' contentEditable="true">University Name</h1> 
                      <h1 className='text-zinc-600 text-sm font-medium label-content' contentEditable="true">Degree type & Major</h1>
                      <h1 className='font-normal text-zinc-500 text-sm label-content' contentEditable="true">Year Attended</h1>
                    </div>
                    <div className='col-span-5'>
                      <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">Started and scaled design team to 6 product deisgners</p>
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
