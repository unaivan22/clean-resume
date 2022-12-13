import React from 'react'
import { useState } from "react"
import { TiDelete } from 'react-icons/ti';

export default function EducationFour() {
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
      <div className='grid grid-cols-7 mt-6 border-b pb-4 border-zinc-300'>
        <h1 className='col-span-2 font-bold label-content'>Education</h1>
        <div className='col-span-5'>
          <div className='grid grid-cols-1 mb-4 gap-x-8 gap-y-6'>
            {item?.map((currentItem, index) => {
              return (
                <div key={currentItem} id={`expense-${index}`} className='flex space-x-4'>
                  <div className='text-right min-w-fit'>
                    <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">March 2019</p>
                    <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">Dec 2023</p>
                  </div>
                  <div className='w-full'>
                    <TiDelete onClick={() => removeRow()} fontSize="1.5em" className='float-right text-zinc-600 hover:text-rose-600 offPrint label-content' />
                    <div className='flex gap-x-2 items-center'>
                      <h1 className='font-bold text-md label-content' contentEditable="true">Harvard University</h1>
                    </div>
                    <div className='flex mt-2 gap-x-6'>
                      <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">Degree type & Major</p>
                    </div>
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
