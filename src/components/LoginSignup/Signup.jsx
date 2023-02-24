import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader'
import api from '../../api/api'
import login from '../../utils/login';
import MessageContext from '../../contexts/MessageContext';
import jwt from 'jwt-decode'


const Signup = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { message, setMessage } = useContext(MessageContext)

    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const sendData = {
            email: email,
            password: password
        }

        login(api, sendData, setMessage, setIsLoading, navigate, jwt, setEmail, setPassword);
    }


    return (
        <article className='login__component background  border-all text-second'>
            <form onSubmit={handleLogin}>
                <span className='goto-signup'>Go to signup</span>
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
                        type="password"
                        className='background text border-all'
                        placeholder='Enter password...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="mt-2">
                    <button className='btn'>Login</button>
                    {/*{isLoading ? <Loader /> : ''}*/}
                </div>
            </form>


        </article>
    )
}

export default Signup