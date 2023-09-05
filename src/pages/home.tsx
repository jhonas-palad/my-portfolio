import React from 'react'
import Navbar from '../components/navbar'
import myPic from '../assets/my-image.png'
import '../assets/css/home.css'
import {FaFacebook, FaInstagram, FaGithub, FaLinkedin}from 'react-icons/fa'
import NameHeading from '../components/nameheading'
import MyProfile from '../components/myprofile'
import MyDescription from '../components/mydescription'
import Bio from '../components/bio'
const HomePage:React.FC = () => {
  return (
    <>
    <div className='w-full'>
      <div className='section first'>
        <div className='max-w-4xl w-full flex flex-col md:flex-row justify-between gap-3 md:gap-5'>
          <MyProfile/>
          <MyDescription/>
        </div>
      </div>
      <div className='section h-[100vh] third'>

      </div>
      <div className='section second'>
        <div className='max-w-4xl w-full'>
          <Bio/>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage