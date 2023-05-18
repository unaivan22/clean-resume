import React from 'react'
import { useState } from "react"
import { TiDelete } from 'react-icons/ti';

export default function ExperienceThree() {
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
        <h1 className='font-bold uppercase tracking-widest label-content'>Experience</h1>
        <div className='col-span-5'>
          <div className='grid grid-cols-1 mt-4 mb-4 gap-x-8 gap-y-6'>
            {item?.map((currentItem, index) => {
              return (
                <div key={currentItem} id={`expense-${index}`}>
                  <div>
                    <TiDelete onClick={() => removeRow()} fontSize="1.5em" className='deletebtn float-right text-zinc-600 hover:text-rose-600 offPrint label-content' />
                    <div className='grid flex-col'>
                      <h1 className='font-base text-md text-lg label-content' contentEditable="true">Apple</h1> 
                      <h1 className='font-bold text-lg label-content' contentEditable="true">UX Engineer</h1> 
                      <h1 className='font-light text-sm label-content' contentEditable="true">March 2022 - Present</h1> 
                      <p className='font-thin text-sm label-content ' contentEditable="true">Cupertino, California</p> 
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
