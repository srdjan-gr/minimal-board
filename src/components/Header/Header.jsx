import React, { useContext } from 'react'
import { BiDotsVerticalRounded, BiArrowToLeft, BiSun } from "react-icons/bi";

import SidebarContext from '../../contexts/SidebarContext';
import ThemeContext from '../../contexts/ThemeContext';

const Header = () => {

    const { sidebar, setSidebar } = useContext(SidebarContext)
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleSidebar = () => {
        setSidebar(!sidebar);

        if (!sidebar) {
            localStorage.setItem('minimalBoardSidebar', 'asideClosed');
        } else {
            localStorage.setItem('minimalBoardSidebar', 'asideOpend');
        }
    }


    const toogleTheme = () => {
        if (theme === 'darkTheme') {
            setTheme('lightTheme')
        } else {
            setTheme('darkTheme')
        }
    }

    return (
        <header className={`${sidebar === true ? 'toggleHeader' : ''} background text border-bottom border-left`}>
            <article className='header__left'>
                <BiArrowToLeft className={`${sidebar === true ? 'icon-rotate-180' : ''} icon-m background-second`} onClick={toggleSidebar} />

            </article>
            <article className='header__right'>
                <BiSun className='icon-m background-second' onClick={toogleTheme} />
                <BiDotsVerticalRounded className='icon-m background-second' />
            </article>
        </header>
    )
}

export default Header