import React from 'react'

import { useLocation } from 'react-router-dom'
import ProjectDetails from '../components/ProjectDetails'
import MenuBar from '../components/MenuBar';

const Project = () => {
  const location = useLocation()
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='title'>
          <ProjectDetails project={location.state}/>
        </div>
      </div>
    </div>
  )
}
export default Project
