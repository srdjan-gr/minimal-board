import React, { useContext } from 'react'
import { BiUser } from "react-icons/bi";
import { Link, useParams } from 'react-router-dom';

import SidebarContext from '../../contexts/SidebarContext';
import CategoriesContext from '../../contexts/CategoriesContext';
import TasksContext from '../../contexts/TasksContext';

import userImg from '../../assets/nouser.jpg';
import brandLogo from '../../assets/logo/mb-white-pink-200.png';
import api from '../../api/api'

const Sidebar = () => {

    const { sidebar } = useContext(SidebarContext);
    const { categories, setCategories, setCatId } = useContext(CategoriesContext);
    const { tasks, setTasks, setIsLoading } = useContext(TasksContext);


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

                <Link to='/'><img className='company-logo' src={brandLogo} alt="" /></Link>
            </article>

            <article className='nav__middle'>
                <ul>
                    {categories.length === 0 ? <span className='ml-15'>Nema kategorija za prikaz.</span> :
                        categories.map((category, idx) => {
                            return (
                                <Link key={category.id} className='text' to={`All/${category.kategorija_ime_EN}`} onClick={() => fetchTasks(category.id)}> {category.kategorija_ime_EN}</Link>
                            )
                        })
                    }
                </ul>
            </article>
        </nav>
    )
}

export default Sidebar