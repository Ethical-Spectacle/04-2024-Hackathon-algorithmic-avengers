import React, { useState } from 'react';
import './signup.css';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [industry, setIndustry] = useState('');
    const [budget, setBudget] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, such as making an API call to your server
    }

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Location:
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Industry:
                    <input
                        type="text"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Budget:
                    <input
                        type="text"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignupPage;