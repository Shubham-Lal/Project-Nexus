import './style.css';
import { Link } from 'react-router-dom';
import Slider from '../../components/slider';

export default function Home() {
    return (
        <div id='home'>
            <div className='hero'>
                <h1>Pizzeria</h1>
                <h2>Welcome to Original Italian Pizzeria</h2>
                <div className='pizza-video'>
                    <video src='/pizza.mp4' muted autoPlay loop></video>
                </div>
            </div>

            <Slider />

            <footer>
                <div className='delivery-video'>
                    <video src='/delivery.mp4' muted autoPlay loop></video>
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