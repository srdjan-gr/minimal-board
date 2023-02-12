import React, { useState, useContext } from 'react'

import Header from '../components/Header/Header'
import OptionsMenu from '../components/OptionsMenu/OptionsMenu'
import Sidebar from '../components/Sidebar/Sidebar'

import ErrorComponent from '../components/ErrorComponent/ErrorComponent';

import SidebarContext from '../contexts/SidebarContext';
import Breadcrumb from '../components/Bradcrumb/Breadcrumb';

import Modal from '../components/Modal/Modal';
import HiddenMenu from '../components/HiddenMenu/HiddenMenu';

const ErrorPage = () => {

    const { sidebar } = useContext(SidebarContext)


    return (
        <div>
            <Modal />
            <HiddenMenu />
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