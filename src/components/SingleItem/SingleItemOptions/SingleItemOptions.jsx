import React, { useContext } from 'react'
import { BiEditAlt, BiShow } from "react-icons/bi";
import api from '../../../api/api';


import SingleItemOptionsContext from '../../../contexts/SingleItemOptionsContext'
import TasksContext from '../../../contexts/TasksContext';
import CategoriesContext from '../../../contexts/CategoriesContext';

import HiddenMenuContext from '../../../contexts/HiddenMenuContext';
import ModalContext from '../../../contexts/ModalContext';
import TaskEditContext from '../../../contexts/TasksEditContext';

const SingleItemOptions = ({ task }) => {

    const { itemsMenu, setItemsMenu } = useContext(SingleItemOptionsContext)
    const { setTasks, setIsLoading } = useContext(TasksContext);
    const { categories, setCategories, catId, setCatId } = useContext(CategoriesContext);

    const { hiddenMenu, setHiddenMenu } = useContext(HiddenMenuContext);
    const { modal, setModal } = useContext(ModalContext)
    const { tasksEdit, setTasksEdit } = useContext(TaskEditContext)


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
                        setItemsMenu({ container: false, itemId: '' })
                    });
            });
    }


    const editItem = (task) => {
        setHiddenMenu({ container: true, option: 'editTask', optionName: "Edit Task" });
        setModal(true);
        
        setTasksEdit({
            taskData: task, isLoading: false,
        });
        setItemsMenu({ container: false, itemId: '' })
    }


    return (
        // Class for toggle component will be added only if 2 ids are the same
        // Preventing that on Single Task click Options component will be opened in All Tasks
        <article className={`${itemsMenu.container && task.id_task == itemsMenu.itemId ? 'singleItemOptionsToggle' : ''} singleItemOptions__container background text border-all`}>
            <div className='header__menu-single' >
                <BiShow className='icon-m background-second' />
                <h3>Details</h3>
            </div>
            <div className='header__menu-single' onClick={() => editItem(task)}>
                <BiEditAlt className='icon-m background-second' />
                <h3>Edit</h3>
            </div>
            <div className='header__menu-single' onClick={() => deleteItem(task.id_task)}>
                <BiEditAlt className='icon-m background-second' />
                <h3>Delete</h3>
            </div>
        </article>
    )
}

export default SingleItemOptions