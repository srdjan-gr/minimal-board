import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader'
import api from '../../api/api'
import signupFun from '../../utils/signupFun';
import MessageContext from '../../contexts/MessageContext';
import { BiShow, BiHide } from "react-icons/bi";

import logo from '../../assets/logo/mb-white-pink-200.png'


const Signup = ({ cards, setCards }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [showPass, setShowPass] = useState('password');
    const { message, setMessage } = useContext(MessageContext)
    const navigate = useNavigate();


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState(false);


    const handleLogin = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const sendData = {
            name: firstName,
            lastName: lastName,
            email: email,
            password: password,
            terms: terms
        }

        signupFun(api, sendData, setMessage,
            setIsLoading, navigate, setEmail,
            setPassword, setLastName,
            setTerms, setFirstName, setCards, cards);

        e.target.terms.checked = false
    }


    const changeCards = (e) => {
        // setSignup(!signup)
        setCards({ login: true, signup: false, reset: false, new: false })
        setEmail('')
        setPassword('')
        setfirstName('')
        setLastName('')
        // setTerms(false)
    }


    return (
        <article className={`${cards.signup ? 'moveSignup' : ''} card__component signup__component `}>
            <form onSubmit={handleLogin} className='mt-3'>
                <span className='goto-signup' onClick={(e) => changeCards()}>Back to login</span>
                <img src={logo} alt="minimal boardlogo" />

                <div className='login-form'>
                    <label htmlFor="" className=' mb-05'>Name</label>
                    <input
                        autoComplete="on"
                        type="text"
                        placeholder='Enter name...'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className='login-form'>
                    <label htmlFor="" className=' mb-05'>Last Name</label>
                    <input
                        autoComplete="on"
                        type="text"
                        placeholder='Enter last name...'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className='login-form'>
                    <label htmlFor="" className=' mb-05'>Email</label>
                    <input
                        autoComplete="on"
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
                <div className=' check'>
                    <input
                        type="checkbox"
                        name='terms'
                        value={terms}
                        onChange={(e) => setTerms(!terms)}
                    />
                    <label htmlFor="" className=' ml-15'>I agree with terms of use.</label>
                </div>

                <div className="mt-1 login-button">
                    <button className='btn'>Signup</button>
                    {isLoading ? <Loader /> : ''}
                </div>
            </form>


        </article>
    )
}

export default Signup