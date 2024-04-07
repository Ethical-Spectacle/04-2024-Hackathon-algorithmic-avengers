// SignIn.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Consumer');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store user data in local storage
    const user = {
        username: username,
        email: email,
        password: password,
        role: role
      };
    localStorage.setItem('user', JSON.stringify({ username, email, password, role }));
    navigate('/dashboard')
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Consumer">Consumer</option>
            <option value="Vendor">Vendor</option>
          </select>
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
