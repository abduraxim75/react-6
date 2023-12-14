import React from 'react';
import logo from "../assets/logo.svg"
import { AuthButton, AuthInput } from '../components/reuse-auth';


const Login = () => {
    return (
        <div className='container auth-container'>
            <div className='signup'>
                <img className='signup-images' src={logo} alt="logo" />
                <h2 className='signuph2'>
                    Log in
                </h2>
                <form className='auth-form'>
                    <AuthInput type="email" placeholder="Email" />
                    <AuthInput type="password" placeholder="Password" />
                </form>
                <h4 className='signh4'>
                Don’t you have an account? Sign Up.
                </h4>
                <AuthButton>
                    Log In
                </AuthButton>
            </div>
        </div>
    );
}

export default Login;
