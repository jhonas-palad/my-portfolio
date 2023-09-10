import { useId } from 'react';
import ObservedObj from './observedobj';
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
    <div className='bio w-full py-10 px-0 rounded-3xl overflow-hidden'>
      <h1 className='text-5xl mb-2'>Bio</h1>
      <p className='mb-4 px-20 dark:text-secondary-500'>Join me on this exciting journey of discovery and achievement</p>
      <div className='bio-details'>
        <div className='line'></div>
        {
          BIO_INFORMATION.map(({year, description}, index)=> (
            <div key={useId()} className='bio-detail'>
              <ObservedObj rootMargin='-70px' className={`${index % 2 ? 'text-left translate-x-[90%]' : 'text-right translate-x-[-90%]'} p-5 rounded-md opacity-0 w-full duration-[2s]`}>
                  <p className='font-bold text-lg'>{year}</p>
                  <p className='lg:text-base font-light text-sm'>{description}</p>
              </ObservedObj>
            </div>
                            
          ))
        }
      </div>
    </div>
  )
}

export default Bio