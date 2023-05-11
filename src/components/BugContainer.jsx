import React from 'react'
import { Link } from 'react-router-dom'


const BugContainer = ({bugs}) => {
  console.log(bugs)
  return (
    <div>
      <table id='customer'>
        <tbody>
          <tr>
            <th>Bug Title</th>
            <th>Bug Description</th>
            <th>Bug Creator</th>
            <th>Bug Assignee</th>
          </tr>
        </tbody>
          {bugs?.map(
            (bug) =>
              (
                <React.Fragment key={bug.id}>
                  <tbody>
                    <tr>
                      <td><Link to={`${bug.id}`} state={bug}>{bug.title}</Link></td>
                      <td>{bug.details}</td>
                      <td>{bug.creator}</td>
                      <td>{bug.assignee}</td>
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
