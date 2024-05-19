import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <nav>
            <h1>Pizzeria</h1>

            <img src='/arrow.svg' alt='Arrow' />

            <div className='links__container'>
                <Link to='/'>Order Now</Link>
                <Link to='/login'>Login</Link>
            </div>
        </nav>
    )
}

export default Navbar