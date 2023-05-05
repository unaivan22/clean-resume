import React from 'react'
import { useState } from "react"
import { TiDelete } from 'react-icons/ti';

export default function SoftwareToolSeven() {
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
      <div className='grid grid-cols-1 mx-auto'>
        <h1 className=' font-bold tracking-widest mb-4 label-content'>Software & Tools</h1>
        <div className=''>
          <div className='grid grid-cols-2 mb-4 gap-y-2 gap-x-4'>
            {item?.map((currentItem, index) => {
              return (
                <div key={currentItem} id={`expense-${index}`}>
                  <div>
                    <TiDelete onClick={() => removeRow()} fontSize="1.5em" className='float-right text-zinc-600 hover:text-rose-600 offPrint label-content' />
                    <p className='text-zinc-500 font-light text-sm label-content' contentEditable="true">Tool name here</p>
                  </div>
                </div>
              )
            } )}
          </div>
          <button onClick={() => addNewRow()} className="bg-zinc-800 hover:bg-zinc-900 text-white font-normal text-sm py-2 px-4 rounded-xl offPrint label-content">Add Achievement</button>
        </div>
      </div>
    </div>
  )
}
