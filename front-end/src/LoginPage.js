// import React, { useState } from 'react';
// import './LoginPage.css';
// import User from './user.js';
// const LoginPage = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(false);

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     // Handle sign up logic here
//     if (password === confirmPassword) {
//       console.log('Sign up successful!');
//       const newUser = new User({
//         username,
//         email,
//         password,
//         role
//       });
//       await newUser.save();
//     } else {
//       console.log('Passwords do not match.');
//     }
//   }

//   const handleLogIn = (e) => {
//     e.preventDefault();
//     // Handle log in logic here
//     console.log('Log in successful!');
//   }

//   return (
//     <div>
//       {isLogin? (
//         <>
//           <h1>Log In</h1>
//           <form onSubmit={handleLogIn}>
//             <label>
//               Email Address:
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </label>
//             <label>
//               Password:
//               <input
//                 type="password"
//               value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </label>
//             <button type="submit">Log In</button>
//           </form>
//           <button onClick={() => setIsLogin(false)}>Sign Up</button>
//         </>
//       ) : (
//         <>
//           <h1>Sign Up</h1>
//           <form onSubmit={handleSignUp}>
//             <label>
//               Full Name:
//               <input
//                 type="text"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//               />
//             </label>
//             <label>
//               Email Address:
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </label>
//             <label>
//               Password:
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </label>
//             <label>
//               Confirm Password:
//               <input
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             </label>
//             <button type="submit">Sign Up</button>
//           </form>
//           <button onClick={() => setIsLogin(true)}>Log In</button>
//         </>
//       )}
//       <button onClick={() => window.location.href = 'https://www.google.com'}>Signup with Google</button>
//       <button onClick={() => window.location.href = 'https://www.facebook.com'}>Sign up with Facebook</button>
//     </div>
//   );
// }

// export default LoginPage;
import axios from 'axios';
import React, { useState } from 'react';
import User from './user.js';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleSignUp = async (e) => {
    console.log('handleSignUp');
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const newUser = new User({
          username,
          email,
          password,
          role,
        });
        axios
   .post('http://localhost:6969/users/register', newUser)
   .then((response) => {
      console.log(response);
    })
   .catch((error) => {
      console.error(error);
    });
        console.log('Sign up successful!');
      } catch (error) {
        console.log('Error signing up:', error);
      }
    } else {
      console.log('Passwords do not match.');
    }
  }

  const handleLogIn = async (e) => {
    e.preventDefault();
    // Handle log in logic here
    console.log('Log in successful!');
  }

  return (
    <div className="container">
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
          <button className="switch-button" onClick={() => setIsLogin(false)}>Sign Up</button>
        </>
      ) : (
        <>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <label>
              Full Name:
              <input
                type="text"
                value={username}
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
            <label>
              Role:
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </label>
            <button type="submit">Sign Up</button>
          </form>
          <button className="switch-button" onClick={() => setIsLogin(true)}>Log In</button>
        </>
      )}
      <button onClick={() => window.location.href = 'https://www.google.com'}>Signup with Google</button>
      <button onClick={() => window.location.href = 'https://www.facebook.com'}>Sign up with Facebook</button>
    </div>
  );
}

export default LoginPage;