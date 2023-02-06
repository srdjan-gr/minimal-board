import React, { useContext } from 'react'
import { BiDotsVerticalRounded, BiArrowToLeft } from "react-icons/bi";

import SidebarContext from '../../contexts/SidebarContext';

const Header = () => {

    const { sidebar, setSidebar } = useContext(SidebarContext)

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <header>
            <article className='header__left'>
                Header

            </article>
            <article className='header__right'>
                <BiArrowToLeft className={`${sidebar === true ? 'icon-rotate-180' : ''} icon-m`} onClick={toggleSidebar} />
            </article>
        </header>
    )
}

export default Header