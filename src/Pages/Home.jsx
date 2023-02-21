import React, { useState, useContext } from 'react'
import Breadcrumb from '../components/Bradcrumb/Breadcrumb';

import Header from '../components/Header/Header'
import HiddenMenu from '../components/HiddenMenu/HiddenMenu';
import Message from '../components/Message/Message';
import Modal from '../components/Modal/Modal';
import OptionsMenu from '../components/OptionsMenu/OptionsMenu'
import Sidebar from '../components/Sidebar/Sidebar'

import SidebarContext from '../contexts/SidebarContext';

const Home = () => {

    const { sidebar } = useContext(SidebarContext)

    return (
        <div>
            <Message />
            <Modal />
            <HiddenMenu />
            <Header />
            <Breadcrumb />
            <OptionsMenu />
            <Sidebar />

            <main className={`${sidebar === true ? 'toggleMainContent' : ''} background text border-left`} >


            </main>
        </div>
    )
}

export default Home