import React from 'react'

import {BiCodeAlt, BiLinkAlt} from 'react-icons/bi';
export type ProjectcardProp = { 
  title: string;
  description: string;
  githublink: string;
  demolink?: string;
  img: string;
} 

const ProjectCard : React.FC<ProjectcardProp>= ({title, description, githublink, demolink, img}) => {
  return (
    <div className='project-card'>
  

      <div className='img-wrapper'>
          <div className="browser-btns">
            <span className="btn bg-red-500"></span>
            <span className="btn bg-yellow-400"></span>
            <span className="btn bg-green-500"></span>
          </div>
          <img className="object-cover" src={img}/>
      </div>
      <div className="content">
          <h2>{title}</h2>
          <p className=''>
            {description}
          </p>
          <div className='links'>
            <a href={githublink}>
              
                <BiCodeAlt className="mr-2 text-xl"/>
                Code
              
            </a>
            {
              demolink && <a href={demolink}>
              
                  <BiLinkAlt className="mr-2 text-xl"/>
                  Demo
              
              </a>
            }
            
          </div>
      </div>
    </div>
  )
}

export default ProjectCard