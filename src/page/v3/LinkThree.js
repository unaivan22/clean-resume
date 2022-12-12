import React from 'react'
import { useState } from "react"
import { TiDelete } from 'react-icons/ti';

export default function LinkThree() {
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
      <div className='grid grid-cols-1 mt-6 border-t border-zinc-300 pt-4'>
        <h1 className='font-bold uppercase tracking-widest label-content'>Link</h1>
        <div className='col-span-5'>
          <div className='grid grid-cols-1 mt-4 mb-4 gap-x-8 gap-y-2'>
            {item?.map((currentItem, index) => {
              return (
                <div key={currentItem} id={`expense-${index}`}>
                  <div>
                    <TiDelete onClick={() => removeRow()} fontSize="1.5em" className='float-right text-zinc-600 hover:text-rose-600 offPrint label-content' />
                    <h1 className='font-light text-sm label-content' contentEditable="true">twitter.com/enniodybeli</h1> 
                  </div>
                </div>
              )
            } )}
          </div>
          <button onClick={() => addNewRow()} className="bg-zinc-800 hover:bg-zinc-900 text-white font-normal text-sm py-2 px-4 rounded-xl offPrint label-content">Add Link</button>
        </div>
      </div>
    </div>
  )
}
