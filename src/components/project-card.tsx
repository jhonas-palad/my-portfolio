import React from 'react'
import myPic from '../assets/qrcode.png'
const ProjectCard = () => {
  return (
    <div className='project-card'>
  

      <div className='img-wrapper'>
          <div className="browser-btns">
            <span className="btn bg-red-500"></span>
            <span className="btn bg-yellow-400"></span>
            <span className="btn bg-green-500"></span>
          </div>
          <img className="object-contain" src={myPic}/>
      </div>
      <div className="content">
          <p className='text-center lg:text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </div>
    </div>
  )
}

export default ProjectCard