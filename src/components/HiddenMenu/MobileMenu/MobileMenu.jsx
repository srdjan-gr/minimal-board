import React, { useContext } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { BiUser, BiListUl, BiDotsHorizontalRounded, BiBrush, BiEdit } from "react-icons/bi";
import api from '../../../api/api'

import CategoriesContext from '../../../contexts/CategoriesContext';
import HiddenMenuContext from '../../../contexts/HiddenMenuContext';
import TasksContext from '../../../contexts/TasksContext';
import fetchTasksByCategory from '../../../utils/fetchTasksByCategory';

const MobileMenu = () => {

    const { categories, setCategories, catId, setCatId } = useContext(CategoriesContext);
    const { hiddenMenu, setHiddenMenu } = useContext(HiddenMenuContext);
    const { tasks, setTasks, setIsLoading, setStatus, setOrder } = useContext(TasksContext);


    const fetchTasks = (catId) => {

        setCatId(catId);
        setIsLoading(true)

        fetchTasksByCategory(catId, setTasks, setIsLoading, api)
        setHiddenMenu({ container: false, option: '', optionName: '' });
    }


    const optionsToogle = () => {
        // setSidebarOption(!sidebarOption)
        setHiddenMenu({ container: true, option: 'boardOptions', optionName: "Board Options" });
    }


    return (
        <div className='mobile__menu'>
            <article className='board__header mobile-header'>
                <BiEdit
                    className='icon-m mobile-icon activeBoard  '
                />
                <BiBrush
                    className='icon-m mobile-icon background-second'
                />
                <BiDotsHorizontalRounded
                    className='icon-m mobile-icon background-second'
                    onClick={() => optionsToogle()} />
            </article>

            <ul>
                {categories.length === 0 ? <span className='ml-15'>Nema kategorija za prikaz.</span> :
                    categories.map((category) => {

                        const x = category.cat_name
                        const short = x.slice(0, 1)

                        return (
                            <div key={category.id_cat} className={`${catId == category.id_cat ? 'activeNavCategory' : ''} mobile-category`}>
                                <Link
                                    className=' icon-letter background-second category-icon mobile-icon'
                                    to={`/home/${category.cat_name}`}
                                    onClick={() => fetchTasks(category.id_cat)}>{short}
                                </Link>

                                <Link
                                    className='text mobile-links '
                                    to={`/home/${category.cat_name}`}
                                    onClick={() => fetchTasks(category.id_cat)}> {category.cat_name}
                                </Link>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MobileMenu