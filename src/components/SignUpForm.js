import React, { useState } from 'react';

function SignUpForm(){
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Signing up user: ${username} with email: ${email} and password: ${password}`);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="radiobutton" value={role} onChange={(event) => setRole(event.target.value)} />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}
