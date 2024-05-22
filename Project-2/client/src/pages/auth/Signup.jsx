import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';

const Signup = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ full_name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!credentials.full_name || credentials.full_name.length === 0) {
            return toast.error('Please enter your name');
        }
        if (!credentials.email || !emailRegex.test(credentials.email)) {
            return toast.error('Please enter a valid email');
        }
        if (!credentials.password || credentials.password.length < 6) {
            return toast.error('Password should be atleast 6 characters');
        }

        setLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message);
                setCredentials({ full_name: '', email: '', password: '' })
                navigate('/login');
            } else {
                toast.error(data.message || 'An error occurred during signup');
            }
        } catch (error) {
            toast.error('An error occurred during signup');
        }
        finally { setLoading(false) };
    }

    return (
        <form id='signup' onSubmit={handleSignup}>
            <h3>Signup</h3>
            <h4>Register today and get 45% off</h4>
            <input
                name='full_name'
                placeholder='Your Name'
                value={credentials.full_name}
                onChange={e => setCredentials({ ...credentials, full_name: e.target.value })}
            />
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
            <button disabled={loading} className={loading ? 'loading' : ''}>
                {loading ? 'SIGNING UP' : 'SIGNUP'}
            </button>
            <p>Already have account? <Link to='/login'>Login</Link></p>
        </form>
    )
}

export default Signup