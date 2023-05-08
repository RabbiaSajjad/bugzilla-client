import React from 'react'

import { useLocation } from 'react-router-dom'
import ProjectDetails from '../components/ProjectDetails'

const Project = () => {
  const location = useLocation()
  console.log(location.state)
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
