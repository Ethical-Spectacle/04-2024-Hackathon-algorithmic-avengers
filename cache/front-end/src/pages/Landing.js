import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="button-container">
                <Link to="/signup"> {/* Use Link component to navigate to the login page */}
                    <button className="button">SignUp</button>
                </Link>

                <Link to="/login"> {/* Use Link component to navigate to the login page */}
                    <button className="button">LogIn</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
