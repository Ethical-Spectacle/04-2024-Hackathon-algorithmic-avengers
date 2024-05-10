import {useState} from 'react';
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Vendor');
    const [location, setLocation] = useState('');
    const [energy, setEnergy] = useState('');
    const {signup, error, isLoading} = useSignup()
    const handleSubmit = async (e) => {
        e.preventDefault()
        // try {
        //     const response = await axios.post('http://localhost:6968/api/user/login', { username,  email, password, role, location, energy });
        //     console.log('Login successful:', response.data);
        //     // Redirect or handle login success as needed
        // } catch (error) {
        //     console.error('Login failed:', error.response?.data || error.message);
        //     // Handle login failure
        // }
        // if(role === 'Consumer') {
        //     window.alert('Your request has been submitted! We will reach out to you with a suitable match.')
        //     // navigate('/customer')
        //     // setFormData({...initialformdata})
        //     window.location.reload();
        // }
        // else {
        //     navigate('/vendor')
        // }
        await signup(email, password, role, location, energy)
    }

    return (
        <div>
            
            <form className="signup" onSubmit={handleSubmit}>
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
                        <option value="Consumer">Consumer</option>
                        <option value="Vendor">Vendor</option>
                    </select>
                </div>
                <div>
                    <label>Location:</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                </div>
                <div>
                    <label>Energy:</label>
                    <input type="text" value={energy} onChange={(e) => setEnergy(e.target.value)} />
                </div>
                <button disabled={isLoading}>Sign up</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}
export default Signup;