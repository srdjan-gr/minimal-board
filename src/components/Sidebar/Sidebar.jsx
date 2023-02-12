import React, { useContext } from 'react'
import { BiUser, BiListUl } from "react-icons/bi";
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import SidebarContext from '../../contexts/SidebarContext';
import CategoriesContext from '../../contexts/CategoriesContext';
import TasksContext from '../../contexts/TasksContext';
import ThemeContext from '../../contexts/ThemeContext';

import userImg from '../../assets/nouser.jpg';
import brandLogoLight from '../../assets/logo/mb-white-pink-200.png';
import brandLogoDark from '../../assets/logo/mb-black-pink-200.png';
import api from '../../api/api'

const Sidebar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const { sidebar } = useContext(SidebarContext);
    const { categories, setCategories, catId, setCatId } = useContext(CategoriesContext);
    const { tasks, setTasks, setIsLoading, setStatus, setOrder } = useContext(TasksContext);

    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation();


    const fetchTasks = (id) => {

        // const param = searchParams.get('/All/*')
        // if (param) {
        //     searchParams.delete('/All/*')
        //     setSearchParams(searchParams)
        // }

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

                <Link to='/'>
                    {theme == 'darkTheme' ?
                        <img className='company-logo' src={brandLogoLight} alt="" onClick={resetFilters} /> :
                        <img className='company-logo' src={brandLogoDark} alt="" onClick={resetFilters} />}
                </Link>
            </article>

            <article className='nav__middle'>
                <ul>
                    {categories.length === 0 ? <span className='ml-15'>Nema kategorija za prikaz.</span> :
                        categories.map((category) => {

                            const x = category.cat_name
                            const short = x.slice(0, 1)

                            return (
                                <div key={category.id_cat} className={`${catId == category.id_cat ? 'activeNavCategory' : ''} nav__middle-category`}>
                                    <Link
                                        className=' icon-letter background-second category-icon'
                                        to={`All/${category.cat_name}`}
                                        onClick={() => fetchTasks(category.id_cat)}>{short}
                                    </Link>

                                    <Link
                                        className='text category-links '
                                        to={`All/${category.cat_name}`}
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