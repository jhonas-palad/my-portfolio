import { useId } from 'react';
import ObservedObj from './observedobj';
import SectionHeader from './sectionheader';
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
      <SectionHeader title='Bio'>
        Join me on this exciting journey of discovery and achievement
      </SectionHeader>
      <div className='bio-details'>
        <div className='line'></div>
        {
          BIO_INFORMATION.map(({year, description}, index)=> (
            <div key={useId()} className='bio-detail'>
              <ObservedObj rootMargin='-70px' className={`${index % 2 ? 'text-left translate-x-[50%]' : 'text-right translate-x-[-50%]'} p-5 rounded-md opacity-0 w-full duration-[2s]`}>
                  <p className='year'>{year}</p>
                  <p className='desc'>{description}</p>
              </ObservedObj>
            </div>
                            
          ))
        }
      </div>
    </div>
  )
}

export default Bio