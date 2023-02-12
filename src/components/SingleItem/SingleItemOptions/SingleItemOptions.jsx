import React, { useContext } from 'react'
import { BiEditAlt, BiShow } from "react-icons/bi";
import api from '../../../api/api';


import SingleItemOptionsContext from '../../../contexts/SingleItemOptionsContext'
import TasksContext from '../../../contexts/TasksContext';
import CategoriesContext from '../../../contexts/CategoriesContext';

const SingleItemOptions = ({ id }) => {

    const { itemsMenu, setItemsMenu } = useContext(SingleItemOptionsContext)
    const { tasks, setTasks, setIsLoading, setStatus, setOrder } = useContext(TasksContext);
    const { categories, setCategories, catId, setCatId } = useContext(CategoriesContext);

    const openHiddenMenu = (option) => {

    }


    const deleteItem = (id) => {

        confirm('Are you shure you to delete task?')

        api({
            method: 'post',
            url: 'tasks.php?fun=delete&id=' + id,
        })
            .then((response) => {
                console.log(response.data);

                setIsLoading(true)
                api({
                    method: 'post',
                    url: 'tasks.php?fun=read&opt=all&id=' + catId,
                })
                    .then((response) => {
                        setTasks(response.data);
                        setIsLoading(false)
                    });
            });
    }


    return (
        // Class for toggle component will be add only if 2 ids are the same
        // Preventing that on Single Task click Options component will be opend in All Tasks
        <article className={`${itemsMenu.container && id == itemsMenu.itemId ? 'singleItemOptionsToggle' : ''} singleItemOptions__container background text border-all`}>
            <div className='header__menu-single' onClick={() => openHiddenMenu('details')}>
                <BiShow className='icon-m background-second' />
                <h3>Details</h3>
            </div>
            <div className='header__menu-single' onClick={() => openHiddenMenu('edit')}>
                <BiEditAlt className='icon-m background-second' />
                <h3>Edit</h3>
            </div>
            <div className='header__menu-single' onClick={() => deleteItem(id)}>
                <BiEditAlt className='icon-m background-second' />
                <h3>Delete</h3>
            </div>
        </article>
    )
}

export default SingleItemOptions