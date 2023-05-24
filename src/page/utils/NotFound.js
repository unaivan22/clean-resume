import React from 'react'

export default function NotFound() {
  return (
    <div className='grid h-screen place-items-center not-found'>
      <div className='text-center'>
        
        <div className='mb-8'>
            <div className='flex items-center gap-x-2'>
                <img className='h-16' src='extends/media/utils/cactus.svg' />
                <h5 className='text-7xl'>404</h5>
            </div>
            <h5 className='text-md font-thin text-zinc-600'>Got lost? Nothing here</h5>
        </div>
        <a className='text-rose-500 text-xl font-bold mt-4' href='/'>Back</a>
      </div>
    </div>
  )
}