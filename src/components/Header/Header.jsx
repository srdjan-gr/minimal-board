import React, { useContext } from 'react'
import { BiDotsVerticalRounded, BiArrowToLeft, BiSun } from "react-icons/bi";

import SidebarContext from '../../contexts/SidebarContext';

const Header = () => {

    const { sidebar, setSidebar } = useContext(SidebarContext)

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <header className={`${sidebar === true ? 'toggleHeader' : ''}`}>
            <BiArrowToLeft className={`${sidebar === true ? 'icon-rotate-180' : ''} icon-m`} onClick={toggleSidebar} />
            <BiSun className='icon-m' />
        </header>
    )
}

export default Header