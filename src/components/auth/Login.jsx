import "./style.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import Welcome from "../../lottie/Welcome.json";
import { IoMailOutline, IoFingerPrintOutline, IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefault();

        toast.success('Login successfull!');
        navigate('/success-login');
    }

    return (
        <form onSubmit={handleLoginSubmit}>
            <Lottie
                className='lottie-anim'
                animationData={Welcome}
                loop={true}
            />

            <h1>Welcome Back,</h1>
            <h2>Please login to your account</h2>

            <div className='input-container' style={{ marginTop: '30px' }}>
                <IoMailOutline size={25} color='gray' />
                <input
                    name='email'
                    type='email'
                    placeholder='E-Mail'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

            <div className='input-container' style={{ marginTop: '10px' }}>
                <IoFingerPrintOutline size={25} color='gray' />
                <input
                    name='password'
                    type={!hidePassword ? 'password' : 'text'}
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {!hidePassword ? (
                    <IoEyeSharp size={20} cursor='pointer' onClick={() => setHidePassword(true)} />
                ) : (
                    <IoEyeOffSharp size={20} cursor='pointer' onClick={() => setHidePassword(false)} />
                )}
            </div>

            <Link to='/login' className='forgot-password'>Forgot Password?</Link>

            <button type='submit' className='submit-btn'>LOGIN</button>

            <p className='divider'>OR</p>

            <button type='button' className='google-btn'>
                <FcGoogle size={25} />
                <p>Sign In with Google</p>
            </button>

            <div className='new-here'>
                <p>New here?</p>
                <Link to='/signup' style={{ color: '#3c82f6' }}>Signup</Link>
            </div>
        </form>
    )
}

export default Login