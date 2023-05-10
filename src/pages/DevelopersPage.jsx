import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import MenuBar from '../components/MenuBar';
// import '../style/AllDevelopers.css'


const AllDevelopers = () => {
  const [developers, setDevelopers] = useState({});

  const fetchData = async () => {
    try{
    const developer = await axios.get('http://localhost:8000/api/users?role=1', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setDevelopers(developer.data);
    }catch (error) {
      alert(`Error: ${error}`);
    }
};

  useEffect(() => {
  fetchData();
  }, []);


if(developers){
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
        {developers?.users?.results.map(
          (developer) =>{
            return (
              <React.Fragment key={developer.id}>
                  <tr>
                    <td>{developer.username}</td>
                    <td>{developer.email}</td>
                    <td>{developer.first_name}</td>
                    <td>{developer.last_name}</td>
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
export default AllDevelopers;
