import React, { useState, useContext, useEffect } from 'react'
import Breadcrumb from '../components/Bradcrumb/Breadcrumb';
import { Navigate, useNavigate } from 'react-router-dom';
import api from '../api/api'

import Header from '../components/Header/Header'
import HiddenMenu from '../components/HiddenMenu/HiddenMenu';
import Message from '../components/Message/Message';
import Modal from '../components/Modal/Modal';
import OptionsMenu from '../components/OptionsMenu/OptionsMenu'
import Sidebar from '../components/Sidebar/Sidebar'


import SidebarContext from '../contexts/SidebarContext';
import ErrorPage from './ErrorPage';
import categoriesFetchAll from '../utils/categoriesFetchAll';

import CategoriesContext from '../contexts/CategoriesContext';

const Home = () => {

    const navigate = useNavigate();
    const { sidebar } = useContext(SidebarContext)
    const { categories, setCategories } = useContext(CategoriesContext);

    // Session
    const mbsession = sessionStorage.getItem("mblog");


    useEffect(() => {

        setTimeout(() => {
            categoriesFetchAll(setCategories, api)
        }, 500)

        setTimeout(() => {
            if (mbsession) {
                sessionStorage.removeItem('mblog')
                navigate('/')
            }
        }, 600000);

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