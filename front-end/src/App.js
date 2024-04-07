// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './pages/LoginPage';
// import Signup from './Signup';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<Login/>} />
//         <Route path="/signup" element={<Signup/>} />
//       </Routes>
//     </Router>
    
//   );
// }

// export default App;

// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
