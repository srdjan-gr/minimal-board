import React, { useState, useContext } from 'react'

import Header from '../components/Header/Header'
import OptionsMenu from '../components/OptionsMenu/OptionsMenu'
import Sidebar from '../components/Sidebar/Sidebar'

import ErrorComponent from '../components/ErrorComponent/ErrorComponent';

import SidebarContext from '../contexts/SidebarContext';
import Breadcrumb from '../components/Bradcrumb/Breadcrumb';

const ErrorPage = () => {

    const { sidebar } = useContext(SidebarContext)


    return (
        <div>
            <Header />
            <Breadcrumb />
            <OptionsMenu />
            <Sidebar />


            <main className={`${sidebar === true ? 'toggleMainContent' : ''} background text border-left`} id="detail">

                <ErrorComponent error='notasks' />

            </main>
        </div>
    )
}

export default ErrorPage