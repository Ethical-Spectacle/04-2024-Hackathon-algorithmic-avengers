// Dashboard.js

import React from 'react';

function Dashboard() {
  // Retrieve user data from local storage
  const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.role);
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <h2>User Details:</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default Dashboard;
