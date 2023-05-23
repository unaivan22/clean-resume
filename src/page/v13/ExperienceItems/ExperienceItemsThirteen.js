import React from 'react'
import { useState } from "react"
import { TiDelete } from 'react-icons/ti';

export default function ExperienceItemsThirteen() {
  const [itemChild, setItemChild] = useState(['div'])
  function addNewRowChild(){
    const current = [...itemChild];
    current.push('newDiv');
    setItemChild(current)
  }
  function removeRowChild(){
    const current = [...itemChild];
    current.pop();
    setItemChild(current)
  }


  return (
    <div className='grid grid-cols-1'>
      <div className='grid grid-cols-1 mt-4 mb-4 ml-8'>
          {itemChild?.map((currentItem, index) => {
              return (
                <ul class="list-disc" key={currentItem} id={`childID-${index}`}>
                  <TiDelete onClick={() => removeRowChild()} fontSize="1.5em" className='deletebtn float-right text-zinc-600 hover:text-rose-600 offPrint label-content' />
                  <li className='font-normal text-zinc-500 text-sm label-content' contentEditable="true">Amet nunc, vel aenean iaculis dictum metus, quis gravida sem.</li>
                </ul>
              )
          } )}
          <button onClick={() => addNewRowChild()} className="bg-zinc-800 w-fit mt-4 hover:bg-zinc-900 text-white font-normal text-sm py-2 px-4 rounded-xl offPrint label-content">Add Description</button>
      </div>
    </div>
  )
}
