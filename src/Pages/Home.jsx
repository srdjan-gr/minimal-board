import React, { useState, useContext } from 'react'
import Breadcrumb from '../components/Bradcrumb/Breadcrumb';

import Header from '../components/Header/Header'
import HiddenMenu from '../components/HiddenMenu/HiddenMenu';
import Message from '../components/Message/Message';
import Modal from '../components/Modal/Modal';
import OptionsMenu from '../components/OptionsMenu/OptionsMenu'
import Sidebar from '../components/Sidebar/Sidebar'

import jwt from 'jwt-decode'

import SidebarContext from '../contexts/SidebarContext';
import ErrorPage from './ErrorPage';

const Home = () => {

    // Session
    const mbsession = sessionStorage.getItem("mblog");

    const { sidebar } = useContext(SidebarContext)


    if (mbsession) {

        return (
            <div>
                <Message />
                <Modal />
                <HiddenMenu />
                <Header />
                <Breadcrumb />
                <OptionsMenu />
                <Sidebar />

                <main className={`${sidebar === true ? 'toggleMainContent' : ''} background text border-left`} ></main>
            </div>
        )
    } else {
        return (
            <ErrorPage nologin />
        )
    }
}

export default Home