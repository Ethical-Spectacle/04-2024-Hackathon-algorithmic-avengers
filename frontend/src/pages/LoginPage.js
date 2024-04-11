// src/pages/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const initialformdata = {
        username: '',
        email: '',
        password: '',
        role: 'Consumer',
        location: '',
        energy: ''

    }
    const [formData, setFormData] = useState({...initialformdata});
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Consumer');
    const [location, setLocation] = useState('');
    const [energy, setEnergy] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:6969/user/register', { username,  email, password, role, location, energy });
            console.log('Login successful:', response.data);
            // Redirect or handle login success as needed
        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message);
            // Handle login failure
        }
        if(role === 'Consumer') {
            window.alert('Your request has been submitted! We will reach out to you with a suitable match.')
            // navigate('/customer')
            // setFormData({...initialformdata})
            window.location.reload();
        }
        else {
            navigate('/vendor')
        }
    };

    return (
        <div className='login-page'>
            <div className='card'>
                <h2>SignUp</h2>
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
                        <select value={role} onChange={(e) => setRole(e.target.value)} className="border border-gray-300 rounded px-3 py-1 w-full">
                        <option value="Consumer">Consumer</option>
                        <option value="Vendor">Vendor</option>
                    </select>
                    </div>
                    <div>
                        <label>Location:</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div>
                        <label>Energy Capacity/Requirement:</label>
                        <input type="text" value={energy} onChange={(e) => setEnergy(e.target.value)} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
