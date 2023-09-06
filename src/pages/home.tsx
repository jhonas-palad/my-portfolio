import React from 'react'
import Navbar from '../components/navbar'
import myPic from '../assets/my-image.png'
import '../assets/css/home.css'
import {FaFacebook, FaInstagram, FaGithub, FaLinkedin}from 'react-icons/fa'
import NameHeading from '../components/nameheading'
import MyProfile from '../components/myprofile'
import MyDescription from '../components/mydescription'
import Bio from '../components/bio';
import TechIcons from '../components/techicons'
import Projects from '../components/projects'

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
      <div className='section h-[100vh] third items-center'>
        <div className='max-w-4xl w-full flex flex-col items-center'>
          <h1 className='text-5xl mb-4'>Technology Stack</h1>
          <p className='px-[4rem] dark:text-secondary-700'>
            Equipped with a versatile technology arsenal, I'm ready to tackle any project, adapting to its unique needs and challenges.
          </p>
          <TechIcons/>
        </div>
      </div>
      <div className='section second'>
        <div className='max-w-4xl w-full'>
          <Bio/>
        </div>
      </div>
      <div className='section fourth'>
        <div className='max-w-4xl h-[100vh] flex flex-col items-center justify-center  w-full'>
        <h1 className='text-5xl mb-4'>Projects</h1>
          <p className='px-[4rem] dark:text-secondary-700'>
          Take a look at something I've worked on, such as a case
study, real project, and more
          </p>
          <Projects/>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage