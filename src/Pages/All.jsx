import React, { useState, useEffect, useContext } from 'react'

import Header from '../components/Header/Header'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import Sidebar from '../components/Sidebar/Sidebar'

import SidebarContext from '../contexts/SidebarContext';

const All = () => {

    const { sidebar } = useContext(SidebarContext)
    const [headerMenu, setHeaderMenu] = useState(false);

    return (
        <div>
            <Header headerMenu={headerMenu} setHeaderMenu={setHeaderMenu} />
            <HeaderMenu headerMenu={headerMenu} />
            <Sidebar />


            <main className={`${sidebar === true ? 'toggleMainContent' : ''} background text border-left`}>

                All Items

            </main>
        </div>
    )
}

export default All