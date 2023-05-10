import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'ProjectContainer.css'



const ProjectContainer = ({projects}) => {
  return (
    <div>
      <table id='customer'>
        <thead>
          <tr>
            <th>Project Title</th>
            <th>Project Details</th>
            <th>Project Manager</th>
          </tr>
        </thead>
        <tbody>
          {projects.projects.results?.map((project) => {
            return (
              <React.Fragment key={project.id}>
                <tr>
                  <td><Link to={`${project.id}`} className="link">{project.title}</Link></td>
                  <td>{project.details}</td>
                  <td>{project.manager.name}</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
 export default ProjectContainer
