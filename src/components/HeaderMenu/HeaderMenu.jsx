import React from 'react'
import { BiLogOutCircle, BiCog } from "react-icons/bi";

const HeaderMenu = ({ headerMenu }) => {
    return (
        <article className={`${headerMenu ? 'toggleHeaderMenu' : ''} header__menu text background-second`}>

            <div className='header__menu-single'>
                <BiCog className='icon-m1' />
                <h3>Settings</h3>
            </div>
            <div className='header__menu-single'>
                <BiLogOutCircle className='icon-m1' />
                <h3>Log Out</h3>
            </div>
        </article>
    )
}

export default HeaderMenu