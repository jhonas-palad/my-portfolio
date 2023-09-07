import React from 'react'
import LineSvg from './LineSvg';
import { useId } from 'react';
type BioProp = {
  year: number | string;
  description: string;
}

const Bio = () => {
  const BIO_INFORMATION : Array<BioProp> = [
    {
      year: 2001,
      description: "Born in Tanauan City Batangas, Philippines"
    },
    {
      year: 2019,
      description: "Started to learn programming"
    },
    {
      year: 2023,
      description: "Completed the Bachelor's Degree in Information Technology at University of Batangas, Philippines",
    },
    {
      year: "Present",
      description: "Looking for job"
    }
  ]
  return (
    <div className='bio w-full py-10 px-0 rounded-3xl'>
      <h1 className='text-5xl mb-2'>Bio</h1>
      <p className='mb-4 px-20 dark:text-secondary-500'>Take a look at something I've worked on, such as a case
            study, real project, and more</p>
      <div className='bio-details'>
        <div className='line'></div>
        {
          BIO_INFORMATION.map(({year, description}, index)=> (
            <div key={useId()} className='bio-detail'>
              <div className={`${index % 2 ? 'text-left' : 'text-right'} p-5 rounded-md w-full`}>
                <p className='font-bold text-lg'>{year}</p>
                <p className='lg:text-base font-light text-sm'>{description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Bio