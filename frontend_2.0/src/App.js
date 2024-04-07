import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import VendorDashboard from './pages/VendorDashboard';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/vendor" element={<VendorDashboard />} />
          {/* Add other routes as needed */}
        </Routes>
    </Router>
  );
};

export default App;
