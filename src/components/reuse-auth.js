
import React from 'react';

const AuthInput = ({ type, placeholder }) => {
    return <input className='auth-input' type={type} placeholder={placeholder} />;
};


const AuthButton = ({ children }) => {
    return <button className='auth-btn'>{children}</button>;
};

export  {AuthButton,AuthInput};
