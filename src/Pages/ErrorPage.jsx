import React, { useState, useContext } from 'react'

import Header from '../components/Header/Header'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import Sidebar from '../components/Sidebar/Sidebar'

import ErrorComponent from '../components/ErrorComponent/ErrorComponent';

import SidebarContext from '../contexts/SidebarContext';

const ErrorPage = () => {

    const { sidebar } = useContext(SidebarContext)
    const [headerMenu, setHeaderMenu] = useState(false);


    return (
        <div>
            <Header headerMenu={headerMenu} setHeaderMenu={setHeaderMenu} />
            <HeaderMenu headerMenu={headerMenu} />
            <Sidebar />


            <main className={`${sidebar === true ? 'toggleMainContent' : ''} background text border-left`} id="detail">

                <ErrorComponent error='error404' />

            </main>
        </div>
    )
}

export default ErrorPage