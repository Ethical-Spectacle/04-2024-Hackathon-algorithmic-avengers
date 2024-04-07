// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Login from './pages/LoginPage';
// // import Signup from './Signup';

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route exact path="/" element={<Login/>} />
// //         <Route path="/signup" element={<Signup/>} />
// //       </Routes>
// //     </Router>
    
// //   );
// // }

// // export default App;

// // App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignIn from './pages/SignIn';

// import CustomerDashboard from './pages/CustomerDashboard';
// import VendorDashboard from './pages/VendorDashboard';
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<SignIn/>} />
//         <Route path="/customer_dashboard" element={<CustomerDashboard/>} />
//         <Route path="/vendor_dashboard" element={<VendorDashboard/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';

// Components
const Header = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#fff' }}>
    <div>{/* Logo goes here */}</div>
    <div>
      <a href="#">SELL</a> | <a href="#">COMPARE</a> | <a href="#">PURC</a> | <a href="#">LISTING</a>
    </div>
    <div>{/* Search and profile links here */}</div>
  </div>
);

const SearchBar = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <input 
      type="text" 
      placeholder="Enter your heat energy requirements"
      style={{ padding: '10px', fontSize: '16px', marginRight: '10px', width: '300px' }}
    />
    <button style={{ padding: '10px 20px', backgroundColor: '#333', color: 'white', border: 'none', cursor: 'pointer' }}>
      Search
    </button>
  </div>
);

const MainContent = () => (
  <div style={{ textAlign: 'center', padding: '50px', background: '#f0f0f0' }}>
    <h1>Find the perfect match for your heat energy needs</h1>
    <p>Browse by capacity, location, or price range</p>
    <SearchBar />
    {/* Illustration and additional content goes here */}
  </div>
);

// Main App Component
const App = () => (
  <div>
    <Header />
    <MainContent />
    {/* Additional sections and footer go here */}
  </div>
);

export default App;