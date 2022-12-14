import React from 'react'

import { template } from './data.js';

export default function PortraitTemplate() {
  const landscape = template.filter(getTemplate =>
    getTemplate.tags === 'landscape'
  );
  const listItems = landscape.map(getTemplate =>
    <a key={getTemplate.id} href={getTemplate.link} className='bg-white p-2 rounded-2xl hover:scale-110 transition ease-in-out delay-150 text-center'>
        <img className='object-fit rounded-xl' src={getTemplate.image} />
        <span className='text-zinc-900 xl:text-medium lg:text-medium md:text-base sm:text-sm xs:text-sm py-12 italic'>{getTemplate.title}</span>
    </a>
  );
  return <ul>{listItems}</ul>;
}


