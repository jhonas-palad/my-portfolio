import React, { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
const ObservedObj: React.FC<{children: ReactNode, className: string}> = ({children, className}) => {
  const {ref, inView} = useInView({threshold:0})
  console.log(inView)
  return (
    <div ref={ref} className={className + ` ${inView ? ' show' : ' no-show'}`}>
      {children}
    </div>

  )
}

export default ObservedObj