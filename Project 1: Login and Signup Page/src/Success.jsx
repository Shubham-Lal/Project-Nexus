import "./Success.css";
import { useLocation, Link } from "react-router-dom";
import Lottie from "lottie-react";
import Welcome from "./lottie/Welcome.json";

const Success = () => {
    const location = useLocation();
    const type = new URLSearchParams(location.search).get('type');

    if (type !== 'login' && type !== 'signup') {
        window.location.href = '/';
        return null;
    }

    return (
        <div id='success'>
            <Lottie
                className='lottie-anim'
                animationData={Welcome}
                loop={true}
            />
            <h1>{type} successful</h1>
            <Link to='/'>Go to Homepage</Link>
        </div>
    );
};

export default Success;