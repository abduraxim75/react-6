// SignUp.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useFetchData from '../api/usefetchdata';
import logo from '../assets/logo.svg';
import { AuthButton, AuthInput } from '../components/reuse-auth';

const SignUp = () => {
    const navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { post: createUser } = useFetchData('/api/auth/signup');

    const handleCreateUser = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await createUser({
                name: `${firstName} ${lastName}`, 
                lastName,
                email,
                password,
            });

            if (response.status === 201) {
                toast.success('You registered successfully');
                navigate('/auth/login');
            }
        } catch (error) {
            toast.error(error.response?.data?.message[0] || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="signup">
                <img className="signup-images" src={logo} alt="Logo" />
                <h4 className="signh4">Sign Up</h4>
                <form className="auth-form" onSubmit={handleCreateUser}>
                    <AuthInput
                        className="tit"
                        type="text"
                        placeholder="First Name"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <AuthInput
                        className="tit"
                        type="text"
                        placeholder="Last Name"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <AuthInput
                        className="tit"
                        type="email"
                        placeholder="Your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="password-wrapper">
                        <AuthInput
                            type={isPasswordVisible ? 'text' : 'password'}
                            placeholder="Your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <AuthButton className="auth-btn" type="submit" disabled={loading}>
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </AuthButton>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
