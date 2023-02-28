import React, { useState, useContext, useEffect } from 'react'
import Breadcrumb from '../components/Bradcrumb/Breadcrumb';
import { Navigate, useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();
    const { sidebar } = useContext(SidebarContext)

    // Session
    const mbsession = sessionStorage.getItem("mblog");

    useEffect(() => {
        setTimeout(() => {
            if (mbsession) {
                sessionStorage.removeItem('mblog')
                navigate('/')
            }
        }, 900000);
    }, [mbsession])



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