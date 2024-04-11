// src/pages/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginUser = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:6969/user/login', { username, password, role });
            console.log('Login successful:', response.data);
            // Redirect or handle login success as needed
            if(role === 'Vendor')
            {
                navigate("/vendor");
            } 
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            // Handle login failure
            // For example, display an error message to the user
        }
        
    };

    return (
        <div className='login-page'>
            <div className='card'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginUser;
