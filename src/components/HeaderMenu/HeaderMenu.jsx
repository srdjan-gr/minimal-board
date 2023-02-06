import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";

const HeaderMenu = ({ headerMenu }) => {
    return (
        <article className={`${headerMenu ? 'toggleHeaderMenu' : ''} header__menu text background-second`}>

            <div className='header__menu-single'>
                <BiLogOutCircle className='icon-m1' />
                <h3>Log Out</h3>
            </div>
        </article>
    )
}

export default HeaderMenu