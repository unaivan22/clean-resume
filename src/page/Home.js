import React from 'react'

export default function Home() {
  function onload(){
    window.onload(
      alert("Hello! I am an alert box!!")
    );
  }
  return (
    <div className='mx-auto padding-10mm bg-zinc-200'>
      <div className='paper space-y-4 bg-white padding-10mm'>
        hai
      </div>
    </div>
  )
}
