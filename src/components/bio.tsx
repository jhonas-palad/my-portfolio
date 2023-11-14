import ObservedObj from './observedobj';
import SectionHeader from './sectionheader';
import { Calendar } from 'lucide-react';
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
      description: "Doing freelance and Looking for full time job"
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
            <div key={index} className={`relative bio-detail before:absolute before:w-8 before:h-8 before:rounded-full before:bg-white/80 ${index % 2 == 0 ? 'before:-right-[17px]': 'before:-left-[22px]' } before:top-1/2 before:-translate-y-1/2 `}>
              <div className={`absolute top-1/2  ${index % 2 == 0 ? '-right-[20px]': '-left-[26px]'} -translate-y-1/2 flex justify-center items-center w-10 h-10`}>
                <Calendar size="1rem" className='text-gray-700'/>
              </div>
              <ObservedObj rootMargin='-70px' className={`${index % 2 ? 'text-left translate-x-[50%]' : 'text-right translate-x-[-50%]'} p-5 rounded-md opacity-0 w-full duration-[2s]`}>
                  <h2 className='year'>{year}</h2>
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