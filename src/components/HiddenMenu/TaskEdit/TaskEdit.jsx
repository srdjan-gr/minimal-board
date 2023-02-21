import React, { useState, useContext } from 'react'
import api from '../../../api/api';
import Loader from '../../Loader/Loader'

// Conrtexts
import CategoriesContext from '../../../contexts/CategoriesContext';
import ModalContext from '../../../contexts/ModalContext';
import HiddenMenuContext from '../../../contexts/HiddenMenuContext';
import TaskEditContext from '../../../contexts/TasksEditContext';
import TasksContext from '../../../contexts/TasksContext';
import MessageContext from '../../../contexts/MessageContext'

// Utilities
import taskEdit from '../../../utils/taskEdit';

const TaskEdit = () => {

    const { categories, catId } = useContext(CategoriesContext);
    const { setModal } = useContext(ModalContext)
    const { setHiddenMenu } = useContext(HiddenMenuContext);
    const { tasksEdit, setTasksEdit } = useContext(TaskEditContext)
    const { setTasks, isLoading, setIsLoading } = useContext(TasksContext);
    const { message, setMessage } = useContext(MessageContext)


    // Initial state
    const [id, setId] = useState(tasksEdit.taskData.id_task);
    const [title, setTitle] = useState(tasksEdit.taskData.task_title);
    const [description, setDescription] = useState(tasksEdit.taskData.task_description);
    const [priority, setPriority] = useState(tasksEdit.taskData.task_priority);
    const [category, setCategory] = useState(tasksEdit.taskData.category_id_cat);

    const handleSubbmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const sendData = {
            id: id,
            title: title,
            description: description,
            priority: priority,
            category: category,
        }

        taskEdit(setIsLoading, setModal, setHiddenMenu,
            setId, setTitle, setDescription, setPriority,
            setCategory, catId, setTasks, setMessage, sendData, api)
    }


    return (
        <form onSubmit={handleSubbmit}>
            <article article className='inputs__container border-all' >
                <label htmlFor="taskName" className='text-third mb-05'>Task Name</label>
                <input
                    type="text"
                    id='taskName'
                    className='background text border-all mb-2'
                    placeholder='Enter name...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="taskDesc" className='text-third mb-05' >Description</label>
                <input
                    id='taskDesc'
                    type="text"
                    placeholder='Enter description...'
                    className='background text border-all mb-2'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label htmlFor="selectCategory" className='text-third mb-05' >Task Priority</label>
                <select
                    id="selectCategory"
                    className='background text border-all mb-2'
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>

                <label htmlFor="selectCategory" className='text-third mb-05' >Task Category</label>
                <select
                    name="cars"
                    id="selectCategory"
                    className='background text border-all'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option defaultValue="0">Select Category</option>
                    {
                        categories.map((category) => {
                            return (
                                <option key={category.id_cat} value={category.id_cat}>{category.cat_name}</option>
                            )
                        })
                    }
                </select>
            </article>

            <div className="btn__container">
                <button className='btn-s'>Edit Task</button>
                {isLoading ? <Loader /> : ''}
            </div>
        </form>
    )
}

export default TaskEdit