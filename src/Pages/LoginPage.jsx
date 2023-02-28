import React, { useState } from 'react'
import Login from '../components/LoginSignup/Login'
import Signup from '../components/LoginSignup/Signup'
import Message from '../components/Message/Message'

import logo from '../assets/logo/logo-no-background.svg'

const LoginPage = () => {

    const [signup, setSignup] = useState(false);

    return (
        <article className='loginPage__component'>
            <img src={logo} />
            <Login signup={signup} setSignup={setSignup} />
            <Signup signup={signup} setSignup={setSignup} />

            <Message />
        </article>
    )
}

export default LoginPage