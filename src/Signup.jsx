import "./Auth.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import Welcome from "./lottie/Welcome.json";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { IoPersonOutline, IoMailOutline, IoPhonePortraitOutline, IoFingerPrintOutline, IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

const Signup = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;
        const errorsObj = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!fullName.trim()) {
            errorsObj.fullName = "Name cannot be empty.";
            isValid = false;
        }
        if (!email || !emailRegex.test(email)) {
            errorsObj.email = "Please enter a valid email.";
            isValid = false;
        }
        if (!phoneNo.trim()) {
            errorsObj.phoneNo = "Phone number cannot be empty.";
            isValid = false;
        }
        if (!password || password.length === 0) {
            errorsObj.password = "Password should be aleast 1 character.";
            isValid = false;
        }

        setErrors(errorsObj);
        return isValid;
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            navigate('/success?type=signup');
        }
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
            {errors.fullName && <span className="error">{errors.fullName}</span>}

            <div className='input-container' style={{ marginTop: '10px' }}>
                <IoMailOutline size={25} color='gray' />
                <input
                    name='email'
                    type='email'
                    placeholder='E-Mail'
                    autoComplete='on'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            {errors.email && <span className="error">{errors.email}</span>}

            <div className='input-container' style={{ marginTop: '10px' }}>
                <IoPhonePortraitOutline size={25} color='gray' />
                <PhoneInput
                    country={'in'}
                    value={phoneNo}
                    onChange={phone => setPhoneNo(phone)}
                    containerClass='phone-input'
                />
            </div>
            {errors.phoneNo && <span className="error">{errors.phoneNo}</span>}

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
            {errors.password && <span className="error">{errors.password}</span>}

            <button type='submit' className='submit-btn'>SIGNUP</button>

            <div className='alternative'>
                <p>Already have an account?</p>
                <Link to='/login' style={{ color: '#3c82f6' }}>Login</Link>
            </div>
        </form>
    )
}

export default Signup;