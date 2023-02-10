import React, { useContext } from 'react'
import { BiUser, BiListUl } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';

import SidebarContext from '../../contexts/SidebarContext';
import CategoriesContext from '../../contexts/CategoriesContext';
import TasksContext from '../../contexts/TasksContext';

import userImg from '../../assets/nouser.jpg';
import brandLogoLight from '../../assets/logo/mb-white-pink-200.png';
import brandLogoDark from '../../assets/logo/mb-black-pink-200.png';
import api from '../../api/api'

const Sidebar = () => {

    const { sidebar } = useContext(SidebarContext);
    const { categories, setCategories, catId, setCatId } = useContext(CategoriesContext);
    const { tasks, setTasks, setIsLoading, setStatus, setOrder } = useContext(TasksContext);

    const location = useLocation();


    const fetchTasks = (id) => {

        setCatId(id);

        setIsLoading(true)
        api({
            method: 'post',
            url: 'tasks.php?fun=read&opt=all&id=' + id,
        })
            .then((response) => {
                setTasks(response.data);
                setIsLoading(false)
            });
    }


    // Resets
    location.pathname == '/' ? setCatId('') : ''
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
                        <h3>User Name</h3>
                        <p>User</p>
                    </div>
                </span>

                <Link to='/'><img className='company-logo' src={brandLogoLight} alt="" onClick={resetFilters} /></Link>
            </article>

            <article className='nav__middle'>
                <ul>
                    {categories.length === 0 ? <span className='ml-15'>Nema kategorija za prikaz.</span> :
                        categories.map((category, idx) => {

                            const x = category.kategorija_ime_EN
                            const short = x.slice(0, 1)

                            return (
                                <div key={category.id} className={`${catId == category.id ? 'activeNavCategory' : ''} nav__middle-category`}>
                                    <Link
                                        className=' icon-letter background-second category-icon'
                                        to={`All/${category.kategorija_ime_EN}`}
                                        onClick={() => fetchTasks(category.id)}>{short}
                                    </Link>

                                    <Link
                                        className='text category-links '
                                        to={`All/${category.kategorija_ime_EN}`}
                                        onClick={() => fetchTasks(category.id)}> {category.kategorija_ime_EN}
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