import React, { useContext } from 'react'

import SidebarContext from '../../contexts/SidebarContext';

const MainContent = () => {

    const { sidebar } = useContext(SidebarContext)

    return (
        <main className={`${sidebar === true ? 'toggleMainContent' : ''} background text border-left`}>Main</main>
    )
}

export default MainContent