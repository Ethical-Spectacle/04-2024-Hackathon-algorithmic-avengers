import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LogIn from './pages/Login';
import LandingPage from './pages/Landing';
import VendorDashboard from './pages/VendorDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import siignup from './pages/CustomerDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/vendor" element={<VendorDashboard />} />
        <Route path="/signup" element={<signup />} />

        {/* Add other routes as needed */}
        <Route path="/customer_dashboard" element={<CustomerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
