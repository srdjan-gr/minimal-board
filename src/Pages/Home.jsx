import React, { useState, useContext } from 'react'
import Breadcrumb from '../components/Bradcrumb/Breadcrumb';

import Header from '../components/Header/Header'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import Sidebar from '../components/Sidebar/Sidebar'

import SidebarContext from '../contexts/SidebarContext';

const Home = () => {

    const { sidebar } = useContext(SidebarContext)
    const [headerMenu, setHeaderMenu] = useState(false);

    return (
        <div>
            <Header headerMenu={headerMenu} setHeaderMenu={setHeaderMenu} />
            <Breadcrumb />
            <HeaderMenu headerMenu={headerMenu} />
            <Sidebar />

            <main className={`${sidebar === true ? 'toggleMainContent' : ''} background text border-left`} >


            </main>
        </div>
    )
}

export default Home