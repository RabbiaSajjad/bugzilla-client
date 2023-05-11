import React from 'react'

import { useLocation } from 'react-router-dom'
import BugDetails from '../components/BugDetails'
import MenuBar from '../components/MenuBar';

const Bug = () => {
  const location = useLocation()
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='title'>
          <BugDetails bug={location.state}/>
        </div>
      </div>
    </div>
  )
}
export default Bug
