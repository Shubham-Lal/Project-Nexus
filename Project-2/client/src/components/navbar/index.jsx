import './style.css';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/logout`, {
                method: 'DELETE',
                credentials: 'include'
            });

            if (response.ok) {
                toast.success('Log out successfully');
                localStorage.removeItem('user');
                navigate('/');
            } else {
                toast.error('Logout failed')
            }
        } catch (error) {
            console.error('Logout failed:', error);
        }
    }

    return (
        <nav>
            <h1>Pizzeria</h1>

            {location.pathname === '/' && (
                <>
                    <img src='/arrow.svg' alt='Arrow' />
                    <div className='links__container'>
                        <Link to='/'>Order Now</Link>
                        {!!localStorage.getItem('user') ? (
                            <button onClick={handleLogout}>Logout</button>
                        ) : (
                            <Link to='/login'>Login</Link>
                        )}
                    </div>
                </>
            )}
        </nav>
    )
}

export default Navbar