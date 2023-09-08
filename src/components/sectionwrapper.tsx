import React, { ReactNode } from 'react'

const SectionWrapper: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className='max-w-4xl w-full h-full'>{children}</div>
  )
}

export default SectionWrapper