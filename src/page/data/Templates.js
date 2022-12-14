import React, { Component } from 'react'
import data from './data.json'

class Templates extends Component {
	render() {
		return (
            <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 gap-x-4 gap-y-4 lg:px-24 xl:px-24 md:px-24 sm:px-6 xs:px-6'>
                { data.exploreTemplate.map((templates, i) => {
						return (
                            <a  key={templates.id} href={templates.link} className='bg-white p-2 rounded-2xl hover:scale-110 transition ease-in-out delay-150 text-center'>
                                <img className='object-fit rounded-xl' src={templates.image} />
                                <span className='text-zinc-900 xl:text-medium lg:text-medium md:text-base sm:text-sm xs:text-sm py-12 italic'>{templates.title}</span>
                            </a>
						);
					})
				}
            </div>
        );
    }
} 
export default Templates;