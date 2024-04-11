import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import VendorDashboard from './pages/VendorDashboard';
import LoginUser from './pages/LoginUser';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/signup" element={<LoginPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/vendor" element={<VendorDashboard />} />
          <Route path="/login" element={<LoginUser />} />
          {/* Add other routes as needed */}
        </Routes>
    </Router>
  );
};

export default App;
