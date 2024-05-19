import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleLogin = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!credentials.email || !emailRegex.test(credentials.email)) {
            return toast.error('Please enter a valid email');
        }
        if (!credentials.password || credentials.password.length === 0) {
            return toast.error('Enter password to login');
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
                credentials: 'include'
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message);
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/');
            } else {
                toast.error(data.message || 'An error occurred during login.');
            }
        } catch (error) {
            toast.error('An error occurred during login.');
        }
    }

    return (
        <form id='login' onSubmit={handleLogin}>
            <h3>Login</h3>
            <h4>Signin today and get 20% off</h4>
            <input
                name='email'
                placeholder='Your Email'
                value={credentials.email}
                onChange={e => setCredentials({ ...credentials, email: e.target.value })}
            />
            <input
                name='password'
                placeholder='Your Password'
                value={credentials.password}
                onChange={e => setCredentials({ ...credentials, password: e.target.value })}
            />
            <button>LOGIN</button>
            <p>New here? <Link to='/signup'>Create Account</Link></p>
        </form>
    )
}

export default Login