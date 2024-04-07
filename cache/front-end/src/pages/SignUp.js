// SignUp.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import user from '../user';
function SignUp() {
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
            await axios.post('http://localhost:6969/user/register', { email, password, role, energy, location});
            alert('Signup successful');
          } catch (err) {
            console.error(err);
            alert('Signup failed');
          }
        // Store user data in local storage
        const user = {
            username: username,
            email: email,
            password: password,
            energy: energy,
            location: location,
            role: role
        };
        localStorage.setItem('user', JSON.stringify({ username, email, password, role, energy, location}));
        console.log(role)
        if(role === 'Consumer') {
            navigate('/consumer_dashboard')
        }
        else {
            navigate('/vendor_dashboard')
        }
        
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block mb-1">
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label className="block mb-1">
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded px-3 py-1 w-full" />
                </label>
                <br />
                <label className="block mb-1">
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded px-3 py-1 w-full" />
                </label>
                <br />
                <label className="block mb-1">
                    Role:
                    <select value={role} onChange={(e) => setRole(e.target.value)} className="border border-gray-300 rounded px-3 py-1 w-full">
                        <option value="Consumer">Consumer</option>
                        <option value="Vendor">Vendor</option>
                    </select>
                </label>
                <br />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign In</button>
            </form>
        </div>
    );
}

export default SignUp;
