import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { BiShow } from "react-icons/bi";
import Loader from '../Loader/Loader'
import api from '../../api/api'
import resetFun from '../../utils/resetFun';
import MessageContext from '../../contexts/MessageContext';
import jwt from 'jwt-decode'

import logo from '../../assets/logo/mb-white-pink-200.png'

const ResetPass = ({ cards, setCards }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const { message, setMessage } = useContext(MessageContext)

    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const sendData = {
            email: email,
        }

        resetFun(api, sendData, setMessage, setIsLoading, navigate, setEmail, cards, setCards);
    }

    const changeCards = () => {
        setCards({ login: false, signup: false, reset: false, new: true })
        setEmail('')
    }


    return (
        <article className={`${cards.reset ? 'movePassReset' : ''} card__component resetPass__component background  border-all text-second`}  >
            <form onSubmit={handleLogin}>
                <span className='goto-signup' onClick={changeCards}>Back to login</span>
                <img src={logo} alt="minimal boardlogo" />

                <div className='login-form'>
                    <label htmlFor="" className='text-third mb-05'>Enter email for reset password</label>
                    <input
                        autoComplete="on"
                        name='email'
                        type="text"
                        className='background text border-all'
                        placeholder='Enter email...'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mt-2 login-button">
                    <button className='btn'>Reset password</button>
                    {isLoading ? <Loader /> : ''}
                </div>
            </form>
        </article>
    )
}

export default ResetPass