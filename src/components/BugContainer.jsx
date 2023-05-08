import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const BugContainer = ({bugs}) => {
  return (
    <div>
      <table id='customer'>
        <tbody>
          <tr>
            <th>Bug Name</th>
            <th>Bug Category</th>
            <th>Bug Description</th>
          </tr>
        </tbody>
          {bugs?.map(
            (bug) =>
              (
                <React.Fragment key={bug.id}>
                  <tbody>
                    <tr>
                      {/* <td><Link to={`${project.id}`} state={project}>{project.name}</Link></td> */}
                      <td>{bug.category}</td>
                      <td>{bug.description}</td>
                    </tr>
                  </tbody>
                </React.Fragment>
              )
          )
        }
      </table>
    </div>
  )
}
 export default BugContainer
