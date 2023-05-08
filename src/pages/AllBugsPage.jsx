import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'
import BugContainer from '../components/BugContainer'
import getBugs from '../api/Bugs'

const AllBugs = () => {
  const [bugs, setBugs] = useState(null)

  const allBugs = async () => {
    try {
      const bug = await getBugs()
      setBugs(bug.data)
    } catch (err) {
      alert('Error: ', err)
    }
  }
  useEffect(
    () => {
      allBugs()
    }, []
  )
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='title'>
          <BugContainer bugs={bugs} />
        </div>
      </div>
    </div>
  )
}
export default AllBugs
