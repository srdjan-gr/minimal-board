import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { BiShow, BiHide } from "react-icons/bi";
import Loader from '../Loader/Loader'
import api from '../../api/api'
import loginFun from '../../utils/loginFun';
import MessageContext from '../../contexts/MessageContext';
import jwt from 'jwt-decode'

import logo from '../../assets/logo/mb-white-pink-200.png'

const Login = ({ cards, setCards }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { message, setMessage } = useContext(MessageContext)
    const [showPass, setShowPass] = useState('password');

    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const sendData = {
            email: email,
            password: password
        }

        loginFun(api, sendData, setMessage, setIsLoading, navigate, jwt, setEmail, setPassword);
    }


    const changeCards = () => {
        // setSignup(!signup)
        setCards({ login: false, signup: true, reset: false })
        setEmail('')
        setPassword('')
    }


    const openResetPass = () => {
        setCards({ login: false, signup: false, reset: true })
        setEmail('')
        setPassword('')
    }


    return (
        <article className={`${cards.login ? '' : 'moveLogin'} card__component login__component`}  >
            <form onSubmit={handleLogin}>
                <span className='goto-signup' onClick={changeCards}>Go to signup</span>
                <img src={logo} alt="minimal boardlogo" />

                <div className='login-form'>
                    <label htmlFor="" className=' mb-05'>Your email</label>
                    <input
                        autoComplete="on"
                        name='email'
                        type="text"
                        placeholder='Enter email...'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='login-form'>
                    <label htmlFor="" className=' mb-05'>Password</label>
                    <input
                        type={showPass}
                        placeholder='Enter password...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPass === 'text' ?
                        <BiShow className=' icon-m visible__pass' onClick={() => setShowPass('password')} />
                        :
                        <BiHide className=' icon-m visible__pass' onClick={() => setShowPass('text')} />}
                </div>

                <div className="mt-2 login-button">
                    <button className='btn'>Login</button>
                    {isLoading ? <Loader /> : ''}
                </div>

                <span className='pass-reset' onClick={openResetPass}>Forgot your password?</span>
            </form>
        </article>
    )
}

export default Login