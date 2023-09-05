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
    <div className='bio w-full border-0'>
      <h1 className='text-left text-3xl font-semibold'>Bio</h1>
      <div className='bio-details'>
        {
          BIO_INFORMATION.map(({year, description}, index)=> (
            <div key={useId()} className='bio-detail'>
              <div className='text-left bg-gray-200 px-3 py-4 shadow-md rounded-md'>
                <p className='font-bold '>{year}</p>
                <p className='text-lg font-light'>{description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Bio