import React from 'react'
import { BiLogOutCircle, BiCog, BiListOl } from "react-icons/bi";

// import headerOptions from '../../data';

const HeaderMenu = ({ headerMenu, headerMenuOption }) => {

    switch (headerMenuOption) {
        case 'add':
            return (
                <article className={`${headerMenu ? 'toggleHeaderMenu' : ''} header__menu right-1 text background border-all`}>
                    <div className='header__menu-single'>
                        <span className='icon-letter background-second'>C</span>
                        <h3>Add Category</h3>
                    </div>
                    <div className='header__menu-single'>
                        <BiListOl className='icon-m background-second' />
                        <h3>Add Task</h3>
                    </div>
                </article>
            )
            break;

        case 'options':
            return (
                <article className={`${headerMenu ? 'toggleHeaderMenu' : ''} header__menu right-1 text background border-all`}>
                    <div className='header__menu-single'>
                        <BiCog className='icon-m background-second' />
                        <h3>Settings</h3>
                    </div>
                    <div className='header__menu-single'>
                        <BiLogOutCircle className='icon-m background-second' />
                        <h3>Log Out</h3>
                    </div>
                </article>
            )
            break;

        default:
            break;
    }

}

export default HeaderMenu