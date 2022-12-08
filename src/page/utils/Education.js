import React from 'react'
import { useState } from "react"

export default function Education() {
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
        <h1>Education</h1>
        <div className='col-span-5'>
          <div className='grid grid-cols-3'>
            {item?.map((currentItem, index) => {
              return (
                <div key={currentItem} id={`expense-${index}`}>
                  <div>
                    <h1 contentEditable="true">Scholl Name <span contentEditable="true">Start - end date</span> </h1>
                    <p contentEditable="true">Degree type & Major</p>
                  </div>
                <button onClick={() => removeRow()}>-</button>
                </div>
              )
            } )}
          </div>
          <button onClick={() => addNewRow()}>+</button>
        </div>
      </div>
    </div>
  )
}
