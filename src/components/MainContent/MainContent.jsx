import React, { useContext } from 'react'

import SidebarContext from '../../contexts/SidebarContext';

const MainContent = () => {

    const { sidebar } = useContext(SidebarContext)

    return (
        <main className={`${sidebar === true ? 'toggleMainContent' : ''}`}>Main</main>
    )
}

export default MainContent