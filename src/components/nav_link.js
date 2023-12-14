import React from 'react';
import { Link, Outlet, } from 'react-router-dom';


const NavLink = () => {
    return (
        <div >
        <div >
                    <div className='links'>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="auth/login">Log In</Link>
                    <Link className='link' to="auth/SignUp">Sign Up</Link>
                    
                    
                </div>
                <Outlet/>
        </div>
        </div>
    );
}

export default NavLink;
