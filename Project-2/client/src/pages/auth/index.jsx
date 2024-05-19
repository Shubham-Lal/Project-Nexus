import './style.css';
import { useLocation, Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

export default function Auth() {
    const location = useLocation();

    return (
        <div id='auth'>
            <div className='auth-modal'>
                <Link to='/' className='close-btn'>
                    <svg>
                        <path d="M26.183 13.424a.652.652 0 0 1 .46-.197.6.6 0 0 1 .462.18.634.634 0 0 1 0 .905l-5.94 5.94 5.927 5.927a.652.652 0 0 1 .197.46.624.624 0 0 1-.642.641.652.652 0 0 1-.46-.196l-5.927-5.927-5.928 5.928a.652.652 0 0 1-.457.194.624.624 0 0 1-.642-.642.652.652 0 0 1 .194-.457l5.924-5.924-5.924-5.924a.652.652 0 0 1-.194-.457.6.6 0 0 1 .18-.462.618.618 0 0 1 .452-.19.618.618 0 0 1 .452.19l5.94 5.94Z"></path>
                    </svg>
                </Link>
                <div className='left'>
                    <img src='/pizza.jpg' alt='Pizza' />
                </div>
                <div className='right'>
                    {(location.pathname === '/login' || location.pathname === '/login/') ? (
                        <Login />
                    ) : (location.pathname === '/signup' || location.pathname === '/signup/') && (
                        <Signup />
                    )}
                </div>
            </div>
        </div>
    )
}