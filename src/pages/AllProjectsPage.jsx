import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useLocation } from "react-router-dom";
import ProjectContainer from "../components/ProjectContainer";
import getProjects from "../api/Projects";

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
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="title">
    //     <ProjectContainer projects={projects} />
    //     </div>
    //   </div>
    // </div>
    <div>
    <table id='customer'>
      <tbody>
        <tr>
          <th>Project Name</th>
          <th>Project Category</th>
          <th>Project Description</th>
        </tr>
        {projects?.projects?.results.map(
          (project) =>{
            return (
              <React.Fragment key={project.id}>
                  <tr>
                    <td><Link to={`${project.id}`} state={project}>{project.title}</Link></td>
                    <td>{project.details}</td>
                    <td>{project.manager}</td>
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
