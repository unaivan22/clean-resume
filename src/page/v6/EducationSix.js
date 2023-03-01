import React from 'react'
import { useState } from "react"
import { TiDelete } from 'react-icons/ti';

export default function EducationSix() {
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
      <div className='grid grid-cols-1'>
        <h1 className='font-bold label-content text-xl mb-2 text-zinc-800'>Education</h1>
        <div className='col-span-5'>
          <div className='grid grid-cols-3 mb-4 gap-x-8 gap-y-6'>
            {item?.map((currentItem, index) => {
              return (
                <div key={currentItem} id={`expense-${index}`}>
                  <div>
                    <TiDelete onClick={() => removeRow()} fontSize="1.5em" className='float-right text-zinc-600 hover:text-rose-600 offPrint label-content' />
                    <h1 className='font-bold text-md label-content' contentEditable="true">Scholl Name  </h1>
                    <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">Degree & Major</p>
                    <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">Class of 2018</p>
                  </div>
                </div>
              )
            } )}
          </div>
          <button onClick={() => addNewRow()} className="bg-zinc-800 hover:bg-zinc-900 text-white font-normal text-sm py-2 px-4 rounded-xl offPrint label-content">Add Education</button>
        </div>
      </div>
    </div>
  )
}
