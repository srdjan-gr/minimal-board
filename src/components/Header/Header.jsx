import React, { useContext } from 'react'
import { BiDotsVerticalRounded, BiArrowToLeft, BiSun } from "react-icons/bi";

import SidebarContext from '../../contexts/SidebarContext';

const Header = () => {

    const { sidebar, setSidebar } = useContext(SidebarContext)

    const toggleSidebar = () => {
        setSidebar(!sidebar);

        if (!sidebar) {
            localStorage.setItem('minimalBoardSidebar', 'asideClosed');
        } else {
            localStorage.setItem('minimalBoardSidebar', 'asideOpend');
        }
    }

    return (
        <header className={`${sidebar === true ? 'toggleHeader' : ''}`}>
            <article className='header__left'>
                <BiArrowToLeft className={`${sidebar === true ? 'icon-rotate-180' : ''} icon-m`} onClick={toggleSidebar} />

            </article>
            <article className='header__right'>
                <BiSun className='icon-m' />
                <BiDotsVerticalRounded className='icon-m' />
            </article>
        </header>
    )
}

export default Header