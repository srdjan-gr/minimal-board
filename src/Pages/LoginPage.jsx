import React, { useState } from 'react'
import Login from '../components/LoginSignup/Login'
import Signup from '../components/LoginSignup/Signup'
import Message from '../components/Message/Message'

import logo from '../assets/logo/logo-no-background.svg'
import ResetPass from '../components/LoginSignup/ResetPass'
import NewPass from '../components/LoginSignup/NewPass'

const LoginPage = () => {

    const [cards, setCards] = useState({
        login: true,
        signup: false,
        reset: false,
        new: false
    })

    return (
        <article className='loginPage__component'>
            <img src={logo} />

            <Login
                cards={cards} setCards={setCards} />

            <Signup
                cards={cards} setCards={setCards} />

            <ResetPass
                cards={cards} setCards={setCards} />

            <NewPass
                cards={cards} setCards={setCards}
            />

            <Message />
        </article>
    )
}

export default LoginPage