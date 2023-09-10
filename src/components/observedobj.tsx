import React, { ComponentProps, ReactNode } from 'react'
import { useInView, IntersectionOptions } from 'react-intersection-observer'

interface ObservedObjProp extends Pick<ComponentProps<"div">, 'className'>, IntersectionOptions{
  children: ReactNode;
}

const ObservedObj: React.FC<ObservedObjProp> = ({children, className, ...opts}) => {
  const {ref, inView} = useInView({threshold:0,...opts})
  return (
    <div ref={ref} className={className + ` ${inView ? ' show' : ' no-show'}`}>
      {children}
    </div>

  )
}

export default ObservedObj