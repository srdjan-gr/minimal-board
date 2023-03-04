import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { BiShow } from "react-icons/bi";
import Loader from '../Loader/Loader'
import api from '../../api/api'
import newPassFun from '../../utils/newPassFun';
import MessageContext from '../../contexts/MessageContext';
import jwt from 'jwt-decode'

import logo from '../../assets/logo/mb-white-pink-200.png'

const NewPass = ({ cards, setCards }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [newPass, setNewPass] = useState('');
    const [resCode, setResCode] = useState('');
    const { message, setMessage } = useContext(MessageContext)

    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const sendData = {
            email: email,
            newPass: newPass,
            resCode: Number(resCode)
        }

        newPassFun(api, sendData, setMessage,
            setIsLoading, navigate, setEmail,
            cards, setCards, setNewPass, setResCode);
    }

    const changeCards = () => {
        setCards({ login: true, signup: false, reset: false, new: false })
        setEmail('')
        setNewPass('')
        setResCode('')
    }


    return (
        <article className={`${cards.new ? 'moveNewPass' : ''} card__component newPass__component background  border-all text-second`}  >
            <form onSubmit={handleLogin}>
                <span className='goto-signup' onClick={changeCards}>Back to login</span>
                <img src={logo} alt="minimal boardlogo" />

                <div className='login-form'>
                    <label htmlFor="" className='text-third mb-05'>Enter your email</label>
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
                <div className='login-form'>
                    <label htmlFor="" className='text-third mb-05'>Enter new password</label>
                    <input
                        autoComplete="on"
                        name='newPass'
                        type="password"
                        className='background text border-all'
                        placeholder='Enter new password...'
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                    />
                </div>
                <div className='login-form'>
                    <label htmlFor="" className='text-third mb-05'>Enter code</label>
                    <input
                        autoComplete="on"
                        name='code'
                        type="text"
                        className='background text border-all'
                        placeholder='Enter code...'
                        value={resCode}
                        onChange={(e) => setResCode(e.target.value)}
                    />
                </div>

                <div className="mt-2 login-button">
                    <button className='btn'>Create new password</button>
                    {isLoading ? <Loader /> : ''}
                </div>
            </form>
        </article>
    )
}

export default NewPass