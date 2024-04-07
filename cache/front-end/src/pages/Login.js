import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [energy, setEnergy] = useState('');
    const [location, setLocation] = useState('');
    const [role, setRole] = useState('Consumer');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:6969/user/register', { username,  email, password, role });
            console.log('Login successful:', response.data);
            // Redirect or handle login success as needed
        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message);
            // Handle login failure
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
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    
                    <div>
                        <label>Role:</label>
                        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
