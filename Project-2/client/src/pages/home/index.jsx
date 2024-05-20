import './style.css';
import { Link } from 'react-router-dom';
import Slider from '../../components/slider';
import Gallery from '../../components/gallery';

export default function Home() {
    return (
        <div id='home'>
            <div className='hero'>
                <h1>Pizzeria</h1>
                <h2>Welcome to Original Italian Pizzeria</h2>
                <div className='pizza-video'>
                    <video preload='auto' muted autoPlay loop>
                        <source src='pizza.mp4' type='video/mp4' />
                    </video>
                </div>
            </div>

            <Slider />

            <Gallery />

            <footer>
                <div className='delivery-video'>
                    <video preload='auto' muted autoPlay loop>
                        <source src='delivery.mp4' type='video/mp4' />
                    </video>
                </div>
                <div className='bottom'>
                    <h3>PIZZERIA, MADE FOR EVERY PIZZA<br />LOVERS!</h3>
                    <Link to='/login' className='login-btn'>Login</Link>
                    <p>MADE WITH 🤍 by <a href="https://github.com/Shubham-Lal">SHUBHAM LAL</a></p>
                </div>
            </footer>
        </div>
    )
}