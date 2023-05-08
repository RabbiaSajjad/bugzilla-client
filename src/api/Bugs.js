import axios from 'axios'


const getBugs = () => axios.get('http://localhost:8000/api/bugs', {
  headers: {
    Authorization: localStorage.getItem('token')
  }
}).then(response => {
  console.log("Successfully fetched projects");
})
.catch(error =>
  alert(`Error: ${error}`))

export default getBugs;
