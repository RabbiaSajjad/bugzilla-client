import React, { useState, useEffect } from 'react';
import axios from 'axios'

import setToken from '../api/Auth';

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        username,
        password,
      });
      const token = response.data.access;
      localStorage.setItem('token', token);
    } catch (error) {
      console.error(error);
    }
  };

  return(
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Sign in</button>
    </form>
  );
}

export default SignInForm;
