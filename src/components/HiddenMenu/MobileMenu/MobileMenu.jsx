import React, { useContext } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import api from '../../../api/api'

import CategoriesContext from '../../../contexts/CategoriesContext';
import HiddenMenuContext from '../../../contexts/HiddenMenuContext';
import TasksContext from '../../../contexts/TasksContext';

const MobileMenu = () => {

    const { categories, setCategories, catId, setCatId } = useContext(CategoriesContext);
    const { hiddenMenu, setHiddenMenu } = useContext(HiddenMenuContext);
    const { tasks, setTasks, setIsLoading, setStatus, setOrder } = useContext(TasksContext);


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
                setHiddenMenu({ container: false, option: '', optionName: '' });
            });
    }

    return (
        <div className='mobile__menu'>
            <ul>
                {categories.length === 0 ? <span className='ml-15'>Nema kategorija za prikaz.</span> :
                    categories.map((category) => {

                        const x = category.cat_name
                        const short = x.slice(0, 1)

                        return (
                            <div key={category.id_cat} className={`${catId == category.id_cat ? 'activeNavCategory' : ''} mobile-category`}>
                                <Link
                                    className=' icon-letter background-second category-icon mobile-icon'
                                    to={`/All/${category.cat_name}`}
                                    onClick={() => fetchTasks(category.id_cat)}>{short}
                                </Link>

                                <Link
                                    className='text mobile-links '
                                    to={`/All/${category.cat_name}`}
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