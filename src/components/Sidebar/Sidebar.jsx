import React, { useContext, useEffect } from 'react'
import { BiUser, BiListUl, BiDotsHorizontalRounded, BiBrush, BiEdit } from "react-icons/bi";
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import api from '../../api/api'
import jwt from 'jwt-decode'

// Contexts
import SidebarContext from '../../contexts/SidebarContext';
import CategoriesContext from '../../contexts/CategoriesContext';
import TasksContext from '../../contexts/TasksContext';
import ThemeContext from '../../contexts/ThemeContext';

import BoardContext from '../../contexts/BoardContext'
import HiddenMenuContext from '../../contexts/HiddenMenuContext';
import ModalContext from '../../contexts/ModalContext';

import userImg from '../../assets/nouser.jpg';
import brandLogoLight from '../../assets/logo/mb-white-pink-200.png';
import brandLogoDark from '../../assets/logo/mb-black-pink-200.png';

import fetchTasksByCategory from '../../utils/fetchTasksByCategory';
import Loader from '../Loader/Loader';

const Sidebar = () => {

    // Session
    const mbsession = sessionStorage.getItem("mblog");
    const token = jwt(mbsession);

    const { theme, setTheme } = useContext(ThemeContext);
    const { sidebar } = useContext(SidebarContext);
    const { categories, setCategories, catId, setCatId, isLoading } = useContext(CategoriesContext);
    const { tasks, setTasks, setIsLoading, setStatus, setOrder } = useContext(TasksContext);

    const { sidebarOption, setSidebarOption } = useContext(BoardContext)
    const { hiddenMenu, setHiddenMenu } = useContext(HiddenMenuContext);
    const { modal, setModal } = useContext(ModalContext)


    const fetchTasks = (catId) => {
        setCatId(catId);
        setIsLoading(true)
        fetchTasksByCategory(catId, setTasks, setIsLoading, api)
    }


    const optionsToogle = () => {
        setHiddenMenu({ container: true, option: 'boardOptions', optionName: "Board Options" });
        setModal(true);
        setSidebarOption(!sidebarOption)
    }


    // Resets
    // location.pathname == '/' ? setCatId('') : ''
    const resetFilters = () => {
        setStatus('')
        setOrder('')
    }

    return (
        <nav className={`${sidebar ? 'toggleSidebar' : ''} background text `} >
            <article className='nav__header border-bottom'>
                <span className='nav__header-user'>
                    <img src={userImg} alt="" />

                    <div className='user-data'>
                        <h3>{token.data.name}</h3>
                        <p>{token.data.status}</p>
                    </div>
                </span>

                <Link to='/home'>
                    {theme == 'darkTheme' ?
                        <img className='company-logo' src={brandLogoLight} alt="" onClick={resetFilters} /> :
                        <img className='company-logo' src={brandLogoDark} alt="" onClick={resetFilters} />}
                </Link>
            </article>

            {/*Boards options in Sidebar header*/}
            <article className='board__header'>
                <BiEdit
                    className='icon-m activeBoard'
                />
                <BiBrush
                    className='icon-m background-second'
                />
                <BiDotsHorizontalRounded
                    className='icon-m background-second'
                    onClick={() => optionsToogle()} />
            </article>


            <article className='nav__middle'>
                <ul>
                    {categories.length === 0 ? <span className='ml-15'>No boards to show.</span> :
                        // {isLoading ? <Loader /> : categories.length === 0 ? <span className='ml-15'>Nema kategorija za prikaz.</span> :
                        categories.map((category) => {

                            const x = category.cat_name
                            const short = x.slice(0, 1)

                            return (
                                <div key={category.id_cat} className={`${catId == category.id_cat ? 'activeNavCategory' : ''} nav__middle-category`}>
                                    <Link
                                        className=' icon-letter background-second category-icon'
                                        to={`/All/${category.cat_name}`}
                                        onClick={() => fetchTasks(category.id_cat)}>{short}
                                    </Link>

                                    <Link
                                        className='text category-links '
                                        to={`/All/${category.cat_name}`}
                                        onClick={() => fetchTasks(category.id_cat)}> {category.cat_name}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </ul>
            </article>
        </nav>
    )
}

export default Sidebar