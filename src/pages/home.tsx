import React from 'react'
import Navbar from '../components/navbar'
import myPic from '../assets/my-pic-final.png'
import '../assets/css/home.css'
import {FaFacebook, FaInstagram, FaGithub, FaLinkedin}from 'react-icons/fa'
import NameHeading from '../components/nameheading'
const HomePage:React.FC = () => {
  return (
    <>
    <div className='w-full h-[100vh]'>
      <div className='first'>
        <div className='my-profile'>
          <div className='my-pic relative flex justify-center items-center'>
            <img id="my-image" src={myPic}/>
            <div className='box-decor'/>
            <div className='box-decor'/>
            <div className='box-decor'/>
            <div className='box-decor'/>
            <div className='box-decor'/>
          </div>
          <div className='flex flex-col gap-8'>
            <div className='my-name z-40'>
              <NameHeading/>
              <div className='line-x'/>
            </div>
              {/* <img className="object-contain" src={myPic}/> */}
            <div className='my-links'>
              <FaInstagram/>
              <FaFacebook/>
              <FaLinkedin/>
              <FaGithub/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage