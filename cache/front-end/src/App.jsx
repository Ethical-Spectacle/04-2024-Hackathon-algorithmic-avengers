import React, { useState } from 'react';

const LoginPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign up logic here
  }

  const handleLogIn = (e) => {
    e.preventDefault();
    // Handle log in logic here
  }

  return (
    <div>
      {isLogin? (
        <>
          <h1>Log In</h1>
          <form onSubmit={handleLogIn}>
            <label>
              Email Address:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Log In</button>
          </form>
          <button onClick={() => setIsLogin(false)}>Sign Up</button>
        </>
      ) : (
        <>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <label>
              Full Name:
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
            <label>
              Email Address:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label>
              Confirm Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <button type="submit">Sign Up</button>
          </form>
          <button onClick={() => setIsLogin(true)}>Log In</button>
        </>
      )}
      <button onClick={() => window.location.href = 'https://www.google.com'}>Signup with Google</button>
      <button onClick={() => window.location.href = 'https://www.facebook.com'}>Sign up with Facebook</button>
    </div>
  );
}

export default LoginPage;