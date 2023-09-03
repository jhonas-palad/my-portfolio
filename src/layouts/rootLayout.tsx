import React from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router'
const RootLayout = () => {
  
  return (
    <React.Fragment>
      <Navbar/>
      <div className='absolute w-full top-[70px] left-0'>
        <Outlet/>
      </div>
      
    </React.Fragment>
  )
}

export default RootLayout