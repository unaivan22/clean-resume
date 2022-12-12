import React from 'react'
import FontSizeChanger from 'react-font-size-changer';

export default function Tools() {
  return (
    <div className='fixed left-12 bottom-12 offPrint'>
        <div className="max-w-full rounded-xl px-8 py-4 bg-zinc-200 overflow-hidden shadow-lg">
          <FontSizeChanger
            targets={['#target .label-content']}
            onChange={(element, newValue, oldValue) => {
              console.log(element, newValue, oldValue);
            }}
            options={{
              stepSize: 2,
              range: 3
            }}
            customButtons={{
              up: <span style={{'fontSize': '24px'}}>A</span>,
              down: <span style={{'fontSize': '14px'}}>A</span>,
              style: {
                backgroundColor: 'black',
                color: 'white',
                WebkitBoxSizing: 'border-box',
                WebkitBorderRadius: '5px',
                width: '60px'
              },
              buttonsMargin: 10
            }}          
          />
        </div>
    </div>
  )
}