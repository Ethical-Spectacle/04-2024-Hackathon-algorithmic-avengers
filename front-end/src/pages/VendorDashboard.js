// Dashboard.js

import React from 'react';

function VendorDashboard() {
  // Retrieve user data from local storage
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <h1>Welcome to Vendor Dashboard</h1>
      <h2>User Details:</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default VendorDashboard;
