import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import VendorDashboard from './pages/VendorDashboard';
import Navbar from './components/Navbar'

const App = () => {
  const { user } = useAuthContext()
  return (
    // <Router>
    //     <Routes>
    //       <Route path="/" element={<LandingPage />} />
    //       <Route path="/vendor" element={<VendorDashboard />} />
    //       <Route path="/signup" element={<Signup />} />
    //       <Route path="/login" element={<Login />} />
    //       {/* Add other routes as needed */}
    //     </Routes>
    // </Router>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<LandingPage />}
              
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
