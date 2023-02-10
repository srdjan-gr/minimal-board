import React, { useContext } from 'react'
import { BiDotsVerticalRounded, BiArrowToLeft, BiSun, BiPlus } from "react-icons/bi";

import SidebarContext from '../../contexts/SidebarContext';
import ThemeContext from '../../contexts/ThemeContext';


const Header = ({ headerMenu, setHeaderMenu }) => {

    const { sidebar, setSidebar } = useContext(SidebarContext)
    const { theme, setTheme } = useContext(ThemeContext)


    const toggleSidebar = () => {
        setSidebar(!sidebar);

        !sidebar ? localStorage.setItem('minimalBoardSidebar', 'asideClosed') :
            localStorage.setItem('minimalBoardSidebar', 'asideOpend')
    }


    const toogleTheme = () => {

        if (theme == 'lightTheme') {
            setTheme('darkTheme')
            localStorage.setItem('minimalBoardTheme', 'darkTheme')
        } else {
            setTheme('lightTheme')
            localStorage.setItem('minimalBoardTheme', 'lightTheme')
        }
    }


    const toggleHeaderMenu = () => {
        setHeaderMenu(!headerMenu)
    }

    return (
        <header className={`${sidebar === true ? 'toggleHeader' : ''} background text border-bottom border-left`}>
            <article className='header__left'>
                <BiArrowToLeft className={`${sidebar === true ? 'icon-rotate-180' : ''} icon-m background-second`} onClick={toggleSidebar} />

            </article>
            <article className='header__right'>
                <BiSun className='icon-m background-second' onClick={toogleTheme} />
                <BiDotsVerticalRounded className='icon-m background-second' onClick={toggleHeaderMenu} />
            </article>


        </header>
    )
}

export default Header