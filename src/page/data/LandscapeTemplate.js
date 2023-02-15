import React from 'react'

import { template } from './data.js';

export default function LandscapeTemplate() {
  const landscape = template.filter(getTemplate =>
    getTemplate.tags === 'landscape'
  );
  const listItems = landscape.map(getTemplate =>
    <a key={getTemplate.id} href={getTemplate.link} className='bg-white p-2 rounded-2xl hover:scale-110 transition ease-in-out delay-150 text-center border border-zinc-200'>
        <img className='object-fit rounded-xl' src={getTemplate.image} />
        <span className='text-zinc-900 xl:text-medium lg:text-medium md:text-base sm:text-sm xs:text-sm py-12 italic'>{getTemplate.title}</span>
    </a>
  );
  return <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-x-4 gap-y-4 lg:px-24 xl:px-24 md:px-24 sm:px-6 xs:px-6'>{listItems}</div>;
}


