import React from 'react'

const SectionHeader: React.FC<{title: string, children: string}> = ({title, children}) => {
  return (
    <div className='mx-2 sm:mx-0'>
      <h1 className='mb-2'>{title}</h1>
      <p className='mb-4 dark:text-secondary-500'>{children}</p>
    </div>
  )
}

export default SectionHeader