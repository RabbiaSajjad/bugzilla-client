import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import MenuBar from '../components/MenuBar';
import '../style/AllProjects.css'


const AllProjects = () => {
  const [projects, setProjects] = useState({});

  const fetchData = async () => {
    try{
    const project = await axios.get('http://localhost:8000/api/projects', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setProjects(project.data);
    }catch (error) {
      alert(`Error: ${error}`);
    }
};

  useEffect(() => {
  fetchData();
  }, []);


if(projects.projects?.results){
  return (
    <div>
    <MenuBar/>
    <table id='customer'>
      <tbody>
        <tr>
          <th>Project Name</th>
          <th>Project Description</th>
          <th>Project Manager</th>
          <th>Project Developers</th>
          <th>Project QAs</th>
        </tr>
        {projects?.projects?.results.map(
          (project) =>{
            return (
              <React.Fragment key={project.id}>
                  <tr>
                    <td><Link to={`${project.id}`} state={project}>{project.title}</Link></td>
                    <td>{project.details}</td>
                    <td>{project.manager.username}</td>
                    {project.developer?.map((dev) => {
                      return (
                        <React.Fragment key={dev.id}>
                          <td>{dev.username}</td>
                        </React.Fragment>
                      )
                    }
                  )}
                  {project.quality_assurance?.map((qa) => {
                      return (
                        <React.Fragment key={qa.id}>
                          <td>{qa.username}</td>
                        </React.Fragment>
                      )
                    }
                  )}
                  </tr>
              </React.Fragment>
            ) }
        )
      }
    </tbody>
    </table>
  </div>
  );
}else{
  return(
    <h1>
      loading
    </h1>
  )
}
};
export default AllProjects;
