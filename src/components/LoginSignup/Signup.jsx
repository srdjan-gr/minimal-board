import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader'
import api from '../../api/api'
import signupFun from '../../utils/signupFun';
import MessageContext from '../../contexts/MessageContext';
import { BiShow } from "react-icons/bi";

import logo from '../../assets/logo/mb-white-pink-200.png'


const Signup = ({ signup, setSignup }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [showPass, setShowPass] = useState(false);
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
            setTerms, setSignup, signup, setFirstName);

        e.target.terms.checked = false
    }


    const changeCards = (e) => {
        setSignup(!signup)
        setEmail('')
        setPassword('')
        setfirstName('')
        setLastName('')
        // setTerms(false)
    }


    return (
        <article className={`${signup ? 'moveSignup' : ''} card__component signup__component background  border-all text-second`}>
            <form onSubmit={handleLogin} className='mt-3'>
                <span className='goto-signup' onClick={(e) => changeCards()}>Back to login</span>
                <img src={logo} alt="minimal boardlogo" />

                <div className='login-form'>
                    <label htmlFor="" className='text-third mb-05'>Name</label>
                    <input
                        autoComplete="on"
                        type="text"
                        className='background text border-all'
                        placeholder='Enter name...'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className='login-form'>
                    <label htmlFor="" className='text-third mb-05'>Last Name</label>
                    <input
                        autoComplete="on"
                        type="text"
                        className='background text border-all'
                        placeholder='Enter last name...'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className='login-form'>
                    <label htmlFor="" className='text-third mb-05'>Email</label>
                    <input
                        autoComplete="on"
                        type="text"
                        className='background text border-all'
                        placeholder='Enter email...'
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
                <div className=' check'>
                    <input
                        type="checkbox"
                        className=''
                        name='terms'
                        value={terms}
                        onChange={(e) => setTerms(!terms)}
                    />
                    <label htmlFor="" className='text-third ml-15'>I agree with terms of use.</label>
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