import React from 'react'
import '../style/ProjectDetails.css'

const ProjectDetails = ({project}) => {
  return (
    <div className="project-details">
  <h1>Project Details</h1>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Details</th>
        <th>Manager</th>
        <th>Developer</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{project.title}</td>
        <td>{project.details}</td>
        <td>
          <div className="manager-details">
            <div className="manager-info">
              <div className="manager-name">{project.manager.username}</div>
              <div className="manager-email">{project.manager.email}</div>
            </div>
          </div>
        </td>
        <td>
          <div className="developer-details">
          {project.developer?.map((dev) => {
            return (
            <React.Fragment key={dev.id}>
              <div className="developer-info">
                <div className="developer-name">{dev.username}</div>
                <div className="developer-email">{dev.email}</div>
              </div>
            </React.Fragment>
            )
            }
          )}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default ProjectDetails
