import React, { useState } from 'react'
import Login from '../components/LoginSignup/Login'
import Signup from '../components/LoginSignup/Signup'
import Message from '../components/Message/Message'

import logo from '../assets/logo/logo-no-background.svg'
import Loader from '../components/Loader/Loader'

const Loading = () => {

    const [signup, setSignup] = useState(false);

    return (
        <article className='loginPage__component'>
            <img src={logo} />
            <Loader />

            <Message />
        </article>
    )
}

export default Loading