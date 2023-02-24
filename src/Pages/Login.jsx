import React from 'react'
import LoginSignup from '../components/LoginSignup/Login'
import Message from '../components/Message/Message'

import logo from '../assets/logo/logo-no-background.svg'

const Login = () => {
    return (
        <article className='loginPage__component'>
            <img src={logo} />
            <LoginSignup />

            <div className="comercial">
                <a className='text-second' href="http://www.videezy.com">Free Broll provided by Videezy</a>
            </div>

            <Message />
        </article>
    )
}

export default Login