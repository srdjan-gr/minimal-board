import React, { useContext } from 'react'
import { BiEditAlt, BiShow, BiTrashAlt } from "react-icons/bi";
import api from '../../../api/api';


import SingleItemOptionsContext from '../../../contexts/SingleItemOptionsContext'
import TasksContext from '../../../contexts/TasksContext';
import CategoriesContext from '../../../contexts/CategoriesContext';

import HiddenMenuContext from '../../../contexts/HiddenMenuContext';
import ModalContext from '../../../contexts/ModalContext';
import TaskEditContext from '../../../contexts/TasksEditContext';
import taskDelete from '../../../utils/taskDelete';
import MessageContext from '../../../contexts/MessageContext'

const SingleItemOptions = ({ task }) => {

    const { itemsMenu, setItemsMenu } = useContext(SingleItemOptionsContext)
    const { setTasks, setIsLoading } = useContext(TasksContext);
    const { categories, setCategories, catId, setCatId, isLoading } = useContext(CategoriesContext);

    const { hiddenMenu, setHiddenMenu } = useContext(HiddenMenuContext);
    const { modal, setModal } = useContext(ModalContext)
    const { tasksEdit, setTasksEdit } = useContext(TaskEditContext)
    const { message, setMessage } = useContext(MessageContext)


    const deleteItem = (id) => {

        const confirmation = confirm('Are you shure you want to delete task?')

        if (confirmation) {
            setIsLoading(true)
            taskDelete(id, catId, setTasks, setMessage, setIsLoading, api)
            setItemsMenu({ container: false, itemId: '' })
        } else {
            setItemsMenu({ container: false, itemId: '' })
            return
        }
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
            {/* <div className='header__menu-single' >
                <BiShow className='icon-m background-second' />
                <h3>Details</h3>
            </div>*/}
            <div className='header__menu-single' onClick={() => editItem(task)}>
                <BiEditAlt className='icon-m mobile-icon background-second' />
                <h3>Edit</h3>
            </div>
            <div className='header__menu-single' onClick={() => deleteItem(task.id_task)}>
                <BiTrashAlt className='icon-m mobile-icon background-second' />
                <h3>Delete</h3>
            </div>
        </article>
    )
}

export default SingleItemOptions