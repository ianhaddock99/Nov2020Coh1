import React from 'react'
import ProjectItem from './ProjectItem'


const Project = ({projects, onDelete}) => {

  return (
    <>
      {projects.map(project =>{
          return <ProjectItem key={project.id} proj={project} onDelete={onDelete}/>
      })}
    </>
  )
}

export default Project
