import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const ProjectContainer = ({projects}) => {
  return (
    <div>
      <table id='customer'>
        <tbody>
          <tr>
            <th>Project Title</th>
            <th>Project Details</th>
            <th>Project Manager</th>
          </tr>
        </tbody>
      {projects.projects.results?.map(
        (project) => {
        return (
        <React.Fragment key={project.id}>
          <tbody>
            <tr>
              <td><Link to={`${project.id}`}>{project.title}</Link></td>
              <td>hello{project.details}</td>
              <td>{project.manager}</td>
            </tr>
          </tbody>
        </React.Fragment>
      )}
      )}
      </table>
    </div>
  )
}
 export default ProjectContainer
