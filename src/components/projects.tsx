import React from 'react'
import ProjectCard from './project-card'

const Projects = () => {
  return (
    <div className='flex gap-3 p-10 flex-wrap'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
  )
}

export default Projects