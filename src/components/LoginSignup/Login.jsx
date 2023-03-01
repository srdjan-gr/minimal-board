import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { BiShow } from "react-icons/bi";
import Loader from '../Loader/Loader'
import api from '../../api/api'
import loginFun from '../../utils/loginFun';
import MessageContext from '../../contexts/MessageContext';
import jwt from 'jwt-decode'

import logo from '../../assets/logo/mb-white-pink-200.png'

const Login = ({ signup, setSignup }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { message, setMessage } = useContext(MessageContext)
    const [showPass, setShowPass] = useState(false);

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
        setSignup(!signup)
        setEmail('')
        setPassword('')
    }


    return (
        <article className={`${signup ? 'moveLogin' : ''} card__component login__component background  border-all text-second`}  >
            <form onSubmit={handleLogin}>
                <span className='goto-signup' onClick={changeCards}>Go to signup</span>
                <img src={logo} alt="minimal boardlogo" />

                <div className='login-form'>
                    <label htmlFor="" className='text-third mb-05'>User name</label>
                    <input
                        autoComplete="on"
                        name='email'
                        type="text"
                        className='background text border-all'
                        placeholder='Enter name...'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='login-form'>
                    <label htmlFor="" className='text-third mb-05'>Password</label>
                    <input
                        type={showPass ? 'text' : 'password'}
                        className='background text border-all'
                        placeholder='Enter password...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <BiShow className=' icon-m visible__pass' onClick={() => setShowPass(!showPass)} />
                </div>

                <div className="mt-2 login-button">
                    <button className='btn'>Login</button>
                    {isLoading ? <Loader /> : ''}
                </div>
            </form>
        </article>
    )
}

export default Login