import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import MenuBar from '../components/MenuBar';
// import '../style/AllDevelopers.css'


const AllQAs = () => {
  const [QAs, setQAs] = useState({});

  const fetchData = async () => {
    try{
    const QA = await axios.get('http://localhost:8000/api/users?role=3', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setQAs(QA.data);
    }catch (error) {
      alert(`Error: ${error}`);
    }
};

  useEffect(() => {
  fetchData();
  }, []);


if(QAs){
  return (
    <div>
    <MenuBar/>
    <table id='customer'>
      <tbody>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        {QAs?.users?.results.map(
          (QA) =>{
            return (
              <React.Fragment key={QA.id}>
                  <tr>
                    <td>{QA.username}</td>
                    <td>{QA.email}</td>
                    <td>{QA.first_name}</td>
                    <td>{QA.last_name}</td>
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
export default AllQAs;
