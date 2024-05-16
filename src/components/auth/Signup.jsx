import "./style.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import Welcome from "../../lottie/Welcome.json";
import { IoPersonOutline, IoMailOutline, IoPhonePortraitOutline, IoFingerPrintOutline, IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { toast } from "sonner";
IoPersonOutline
const Signup = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(false);

    const handleSignupSubmit = (e) => {
        e.preventDefault();

        toast.success('Signup successfull!');
        navigate('/success-register');
    }

    return (
        <form onSubmit={handleSignupSubmit}>
            <Lottie
                className='lottie-anim'
                animationData={Welcome}
                loop={true}
            />

            <h1>Get On Board</h1>
            <h2>Create your profile to start your journey</h2>

            <div className='input-container' style={{ marginTop: '30px' }}>
                <IoPersonOutline size={25} color='gray' />
                <input
                    name='full_name'
                    placeholder='Full Name'
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                />
            </div>

            <div className='input-container' style={{ marginTop: '10px' }}>
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
                <IoPhonePortraitOutline size={25} color='gray' />
                <input
                    name='phone_no'
                    placeholder='Phone No'
                    value={phoneNo}
                    onChange={e => setPhoneNo(e.target.value)}
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

            <button type='submit' className='submit-btn'>SIGNUP</button>
        </form>
    )
}

export default Signup