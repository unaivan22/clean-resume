import React from 'react'

import { template } from './data.js';

export default function PortraitTemplate() {
  const landscape = template.filter(getTemplate =>
    getTemplate.type === 'resume'
  );
  const listItems = landscape.map(getTemplate =>
    <div key={getTemplate.id} className='break-inside bg-white p-2 rounded-2xl hover:scale-110 transition ease-in-out delay-150 text-center max-w-sm overflow-hidden border border-zinc-200'>
        <a href={getTemplate.link} >
        <img className='object-fit rounded-xl' src={getTemplate.image} />
        </a>
    <span className='text-zinc-900 xl:text-medium lg:text-medium md:text-base sm:text-sm xs:text-sm py-12 italic'>{getTemplate.title}</span>
    </div>
  );
  return <div className='order-first xs:masonry-1-col sm:masonry-2-col md:masonry-2-col lg:masonry-3-col xl:masonry-3-col gap-x-6 gap-y-6 gap-x-4 space-y-4 sm:px-6 xs:px-6 w-full'>{listItems}</div>;
}


