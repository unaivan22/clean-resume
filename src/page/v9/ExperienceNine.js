import React from 'react'
import { useState } from "react"
import { TiDelete } from 'react-icons/ti';

export default function ExperienceNine() {
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
    <div>
      <div className='grid grid-cols-1 mt-6'>
        <h1 className='font-bold text-zinc-500 tracking-widest label-content'>Experience</h1>
        <div className='col-span-5'>
          <div className='grid grid-cols-1 mt-4 mb-4 gap-x-8 gap-y-6'>
            {item?.map((currentItem, index) => {
              return (
                <div key={currentItem} id={`expense-${index}`}>
                  <div>
                    <TiDelete onClick={() => removeRow()} fontSize="1.5em" className='float-right text-zinc-600 hover:text-rose-600 offPrint label-content' />
                    <div className='grid flex-col'>
                      <h1 className='font-bold text-md text-md label-content' contentEditable="true">Company</h1> 
                      <h1 className='font-normal text-zinc-500 text-sm label-content' contentEditable="true">Job title here | year - year</h1>
                    </div>
                    <div className='flex mt-2 gap-x-6'>
                      <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">- Started and scaled design team to 6 product deisgners</p>
                    </div>
                  </div>
                </div>
              )
            } )}
          </div>
          <button onClick={() => addNewRow()} className="bg-zinc-800 hover:bg-zinc-900 text-white font-normal text-sm py-2 px-4 rounded-xl offPrint label-content">Add Experience</button>
        </div>
      </div>
    </div>
  )
}
