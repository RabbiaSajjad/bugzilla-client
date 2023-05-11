import React from 'react'
import '../style/ProjectDetails.css'

const BugDetails = ({bug}) => {
  console.log(bug)
  return (
    <div className="project-details">
  <h1>Bug Details</h1>
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
        <td>{bug.title}</td>
        <td>{bug.details}</td>
        <td>
          <div className="manager-details">
            <div className="manager-info">
              <div className="manager-name">{bug.creator.username}</div>
              <div className="manager-email">{bug.creator.email}</div>
            </div>
          </div>
        </td>
        <td>
          <div className="developer-details">
          {bug.assignee?.map((dev) => {
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

export default BugDetails
