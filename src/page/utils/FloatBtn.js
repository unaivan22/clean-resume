import React from 'react'
import { IoPrint } from 'react-icons/io5'
// import { GoMarkGithub } from 'react-icons/go'

export default function FloatBtn() {
  function print(){
    window.print()
  }
  return (
    <div className='fixed bottom-12 right-12 offPrint'>
        <div className='grid grid-cols-1 gap-y-4'>
            {/* // <a href='https://github.com/unaivan22/clean-resume' target={('_blank')} class="w-14 h-14 rounded-full  bg-black text-white text-center inline-flex items-center px-3 py-2.5  mr-2 mb-2">
            //     <GoMarkGithub size={42} />
            // </a> */}
            <a onClick={() => print()} class="w-18 h-18 rounded-full shadow-2xl bg-black text-white text-center inline-flex items-center px-3 py-2.5  mr-2 mb-2">
                <IoPrint size={42} />
            </a>
        </div>
    </div>
  )
}