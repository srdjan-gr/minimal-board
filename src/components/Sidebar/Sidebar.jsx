import React, { useContext } from 'react'
import { BiUser } from "react-icons/bi";
import { Link } from 'react-router-dom';

import SidebarContext from '../../contexts/SidebarContext';

import userImg from '../../assets/nouser.jpg';
import brandLogo from '../../assets/logo-no-background.png';

const Sidebar = () => {

    const { sidebar } = useContext(SidebarContext)

    return (
        <nav className={`${sidebar ? 'toggleSidebar' : ''} background text `} >

            <article className='nav__header border-bottom'>
                <span className='nav__header-user'>
                    <img src={userImg} alt="" />

                    <div className='user-data'>
                        <h3>User Name</h3>
                        <p>User</p>
                    </div>
                </span>


                <Link to='/'><img src={brandLogo} alt="" /></Link>

            </article>

            <article className='nav__middle'>

                <ul>
                    <Link className='text' to='All'>All Items</Link>
                </ul>

            </article>
        </nav>
    )
}

export default Sidebar