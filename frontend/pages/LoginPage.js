// src/pages/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:6969/user/register', { username,  email, password, role });
            console.log('Login successful:', response.data);
            // Redirect or handle login success as needed
        } catch (error) {
            console.error('Login failed:', error.response.data);
            // Handle login failure
        }
    };

    return (
        <div>
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
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">Select Role</option>
                        <option value="vendor">Vendor</option>
                        <option value="consumer">Consumer</option>
                    </select>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
