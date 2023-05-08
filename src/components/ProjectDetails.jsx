import React from 'react'
import { Link } from 'react-router-dom'


const ProjectDetails = ({project}) => {
  return (
    <div>
      <h1>Project Details</h1>
        <React.Fragment key={project.id}>
          <tbody>
            <tr>
              <td>{project.title}</td>
              <td>{project.details}</td>
              <td>{project.manager}</td>
            </tr>
          </tbody>
        </React.Fragment>
    </div>
  )
}

export default ProjectDetails
