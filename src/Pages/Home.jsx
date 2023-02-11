import React, { useState, useContext } from 'react'
import Breadcrumb from '../components/Bradcrumb/Breadcrumb';

import Header from '../components/Header/Header'
import HiddenMenu from '../components/HiddenMenu/HiddenMenu';
import OptionsMenu from '../components/OptionsMenu/OptionsMenu'
import Sidebar from '../components/Sidebar/Sidebar'

import SidebarContext from '../contexts/SidebarContext';

const Home = () => {

    const { sidebar } = useContext(SidebarContext)

    return (
        <div>
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