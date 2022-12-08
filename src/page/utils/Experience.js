import React from 'react'
import { useState } from "react"
import { TiDelete } from 'react-icons/ti';

export default function Experience() {
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
      <div className='grid grid-cols-6'>
        <h1>Experience</h1>
        <div className='col-span-5'>
          <div className='grid grid-cols-1 mb-12 gap-x-8 gap-y-12'>
            {item?.map((currentItem, index) => {
              return (
                <div key={currentItem} id={`expense-${index}`}>
                  <div>
                    <TiDelete onClick={() => removeRow()} fontSize="1.5em" className='float-right text-zinc-600 hover:text-rose-600' />
                    <div className='flex gap-x-4 items-center'>
                      <h1 className='font-bold text-md' contentEditable="true">Company  </h1> <span className='text-zinc-300'>|</span> <span contentEditable="true" className='text-sm font-sm text-zinc-500'>Role</span> <span className='text-zinc-300'>|</span><span contentEditable="true" className='text-sm font-sm text-zinc-500'>Start - End </span><span className='text-zinc-300'>|</span><span contentEditable="true" className='text-sm font-sm text-zinc-500'>Employee Type</span>
                    </div>
                    <div className='flex mt-2 gap-x-6'>
                      <p className='text-zinc-500 font-light text-sm' contentEditable="true">Summary of your achievement on the job or your responsibilities</p>
                      <p className='text-zinc-500 font-light text-sm' contentEditable="true">Another summary of your achievement on the job or your responsibilities</p>
                      <p className='text-zinc-500 font-light text-sm' contentEditable="true">One more summary of your achievement on the job or your responsibilities</p>
                    </div>
                  </div>
                </div>
              )
            } )}
          </div>
          <button onClick={() => addNewRow()} className="bg-zinc-800 hover:bg-zinc-900 text-white font-base py-2 px-4 rounded-xl">Add Experience</button>
        </div>
      </div>
    </div>
  )
}
