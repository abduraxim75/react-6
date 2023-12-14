import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup';
import logo from "../assets/logo.svg"
import NavLink from '../components/nav_link';
import CardDetail from '../components/singlepost';


const Routepages = () => {
    return (
        <div className='link-nav'>
            <div className='nav-link'>
                <img className='logo' src={logo} alt="logo" />
                <NavLink />
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='auth/login' element={<Login />} />
                <Route path='auth/signup' element={<Signup />} />
                <Route path='card/:id' element={<CardDetail/>} />
            </Routes>

        </div >
    );
}

export default Routepages;
