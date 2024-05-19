import { useLocation } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

export default function Auth() {
    const location = useLocation();

    return (
        <div id='auth'>
            {location.pathname === '/login' || location.pathname === '/login/' ? (
                <Login />
            ) : location.pathname === '/signup' || location.pathname === '/signup/' && (
                <Signup />
            )}
        </div>
    )
}