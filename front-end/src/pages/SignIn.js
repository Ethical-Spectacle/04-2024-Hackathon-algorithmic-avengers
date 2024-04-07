// SignIn.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Consumer');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store user data in local storage
        const user = {
            username: username,
            email: email,
            password: password,
            role: role
        };
        localStorage.setItem('user', JSON.stringify({ username, email, password, role }));
        console.log(role)
        if(role === 'Consumer') {
            console.log('bc')
            navigate('/consumer_dashboard')
        }
        else {
            navigate('/vendor_dashboard')
        }
        
    };

    return (
        <div className="max-w-md mx-auto my-10">
            <h1 className="text-3xl font-bold mb-5">Sign In</h1>
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

export default SignIn;
