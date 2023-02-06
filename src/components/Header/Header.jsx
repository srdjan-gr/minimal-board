import React, { useContext } from 'react'
import { BiDotsVerticalRounded, BiArrowToLeft } from "react-icons/bi";


const Header = () => {

    return (
        <header>
            <article className='header__left'>
                Header

            </article>
            <article className='header__right'>
                <BiArrowToLeft className='icon-m' />
            </article>
        </header>
    )
}

export default Header