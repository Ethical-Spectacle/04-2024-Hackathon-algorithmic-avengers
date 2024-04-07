import React from 'react';

function Signup() {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
