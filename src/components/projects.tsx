import React from 'react'
import ProjectCard from './project-card'

const Projects = () => {
  return (
    <div className='projects flex gap-3 mt-10 flex-wrap'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </div>
  )
}

export default Projects