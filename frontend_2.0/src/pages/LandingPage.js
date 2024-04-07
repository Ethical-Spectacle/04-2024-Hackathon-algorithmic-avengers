import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="button-container">
        <button className="button">Login</button>
        <Link to="/login"> {/* Use Link component to navigate to the login page */}
          <button className="button">SignUp</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
