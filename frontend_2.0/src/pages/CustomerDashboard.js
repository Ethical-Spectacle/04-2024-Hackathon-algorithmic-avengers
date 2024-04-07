// Dashboard.js

import React from 'react';

function CustomerDashboard() {
  // Retrieve user data from local storage
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <h1>Welcome to Customer Dashboard</h1>
      <h2>User Details:</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Location: {user.role}</p>
      <p>Energy</p>
    </div>
  );
}

export default CustomerDashboard;