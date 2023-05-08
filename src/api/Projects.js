import axios from 'axios'


const getProjects = async () => await axios.get('http://localhost:8000/api/projects', {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }

}).then()
.catch(error =>{
  alert(`Errorr: ${error}`)})

export default getProjects;
