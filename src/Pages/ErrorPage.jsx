import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';

import logo from '../assets/logo/logo-no-background.svg'

const ErrorPage = ({ nopage, nologin, error }) => {


    if (nopage) {
        return (
            <article className='loginPage__component' >
                <img src={logo} />

                <div className="error-info text">
                    <h3>404</h3>
                    <h3>Page not found!!!</h3>
                    <Link to='/'>Back to login.</Link>
                </div>

                <div className="comercial">
                    <a className='text-second' href="http://www.videezy.com">Free Broll provided by Videezy</a>
                </div>
            </article>
        )

    } else if (error) {
        return (
            <article className='loginPage__component' >
                <img src={logo} />

                <div className="error-info text">
                    <h3>Error</h3>
                    <Link to='/'>Back to login.</Link>
                </div>

                <div className="comercial">
                    <a className='text-second' href="http://www.videezy.com">Free Broll provided by Videezy</a>
                </div>
            </article>
        )

    } else if (nologin) {
        return (
            <article className='loginPage__component' >
                <img src={logo} />

                <div className="error-info text">
                    <h3>You are not loged in!</h3>
                    <Link to='/'>Back to login.</Link>
                </div>

                <div className="comercial">
                    <a className='text-second' href="http://www.videezy.com">Free Broll provided by Videezy</a>
                </div>
            </article>
        )
    }
}

export default ErrorPage