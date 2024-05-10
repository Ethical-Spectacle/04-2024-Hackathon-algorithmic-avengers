import { useState } from 'react';
import { useLogin } from "../hooks/useLogin"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin()
    
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
        await login(email, password)
    }

    return (
        <div>
            
            <form className="login" onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                <button disabled={isLoading}>Log in</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}
export default Login;