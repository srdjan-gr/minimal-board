import React, { useContext } from 'react'

import SidebarContext from '../../contexts/SidebarContext';

const Sidebar = () => {

    const { sidebar } = useContext(SidebarContext)

    return (
        <nav className={`${sidebar ? 'toggleSidebar' : ''}`} >

            <article className='nav__header'>
                sidebar logo
            </article>

            <article className='nav__middle'>
                sidebar menus

            </article>
        </nav>
    )
}

export default Sidebar