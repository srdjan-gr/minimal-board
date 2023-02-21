import React, { useContext } from 'react'
import { BiDotsVerticalRounded, BiArrowToLeft, BiSun, BiPlus, BiMenu } from "react-icons/bi";

import SidebarContext from '../../contexts/SidebarContext';
import ThemeContext from '../../contexts/ThemeContext';
import OptionsMenuContext from '../../contexts/OptionsMenuContext';
import HiddenMenuContext from '../../contexts/HiddenMenuContext';


const Header = () => {

    const { sidebar, setSidebar } = useContext(SidebarContext)
    const { theme, setTheme } = useContext(ThemeContext)
    const { optionsMenuContainer, setOptionsMenuContainer, option, setOption } = useContext(OptionsMenuContext)
    const { hiddenMenu, setHiddenMenu } = useContext(HiddenMenuContext);


    const toggleSidebar = () => {
        setSidebar(!sidebar);

        !sidebar ? localStorage.setItem('minimalBoardSidebar', 'asideClosed') :
            localStorage.setItem('minimalBoardSidebar', 'asideOpend')
    }


    const toggleMobileMenu = () => {
        setHiddenMenu({ container: true, option: 'mobileMenu', optionName: "Categories" });
    }


    // Options on the right side of Header
    const headerMenuOptions = () => {
        setOptionsMenuContainer(!optionsMenuContainer)
        setOption('options')
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

    const headerMenuAdd = () => {
        setOptionsMenuContainer(!optionsMenuContainer)
        setOption('add')
    }



    return (
        <header className={`${sidebar === true ? 'toggleHeader' : ''} background text border-bottom border-left`}>
            <article className='header__left'>
                <BiArrowToLeft className={`${sidebar === true ? 'icon-rotate-180' : ''} icon-m background-second mobile-none`} onClick={toggleSidebar} />
                <BiMenu className='icon-m background-second mobile-menu' onClick={toggleMobileMenu} />
            </article>
            <article className='header__right'>
                <BiPlus className='icon-m background-second' onClick={headerMenuAdd} />
                <BiSun className='icon-m background-second' onClick={toogleTheme} />
                <BiDotsVerticalRounded className='icon-m background-second' onClick={headerMenuOptions} />
            </article>
        </header>
    )
}

export default Header