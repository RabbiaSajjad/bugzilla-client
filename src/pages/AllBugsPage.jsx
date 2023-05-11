import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

import BugContainer from '../components/BugContainer'
import getBugs from '../api/Bugs'
import MenuBar from '../components/MenuBar';

const AllBugs = () => {
  const [bugs, setBugs] = useState({})

  const allBugs = async () => {
    try{
    const bug = await axios.get('http://localhost:8000/api/bugs', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setBugs(bug.data);
    }catch (error) {
      alert(`Error: ${error}`);
    }
};

  useEffect(
    () => {
      allBugs()
    }, []
  )

    return (
      <div>
      <MenuBar/>
      <table id='customer'>
        <tbody>
          <tr>
            <th>Bug Title</th>
            <th>Bug Description</th>
            <th>Bug Creator</th>
            <th>Bug Assignee</th>
          </tr>
        </tbody>
          {bugs?.bugs?.results.map(
            (bug) =>
              (
                <React.Fragment key={bug.id}>
                  <tbody>
                    <tr>
                      <td><Link to={`${bug.id}`} state={bug}>{bug.title}</Link></td>
                      <td>{bug.details}</td>
                      <td>{bug.creator.username}</td>
                      <td>{bug.assignee.username}</td>
                    </tr>
                  </tbody>
                </React.Fragment>
              )
          )
        }
      </table>
    </div>
    );
  };
export default AllBugs
