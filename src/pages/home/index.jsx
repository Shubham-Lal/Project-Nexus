import "./style.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Welcome from "../../lottie/Welcome.json";

export default function Home() {
    return (
        <div id='home'>
            <div className='welcome-modal'>
                <div className='left'>
                    <Lottie
                        className='lottie-anim'
                        animationData={Welcome}
                        loop={true}
                    />
                </div>
                <div className='right'>
                    <h1>Auth Page</h1>
                    <h2>Project 1: Login & Signup Page</h2>
                    <div className='auth-btns'>
                        <Link to='/login'>LOGIN</Link>
                        <Link to='/signup'>SIGNUP</Link>
                    </div>
                </div>
                <div className='footer'>
                    <p>Made with ❤️ by</p>
                    <a href="https://github.com/Shubham-Lal">Shubham Lal</a>
                </div>
            </div>
        </div>
    )
}