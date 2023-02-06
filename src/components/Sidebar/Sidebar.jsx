import React, { useContext } from 'react'

import SidebarContext from '../../contexts/SidebarContext';

const Sidebar = () => {

    const { sidebar } = useContext(SidebarContext)

    return (
        <nav className={`${sidebar ? 'toggleSidebar' : ''}`} >
            sidebar

        </nav>
    )
}

export default Sidebar