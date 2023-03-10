import React, { useState, useContext } from 'react'
import api from '../../../api/api';
import jwt from 'jwt-decode'
import Loader from '../../Loader/Loader'
import Category from '../Category.jsx/Category';

import CategoriesContext from '../../../contexts/CategoriesContext';
import ModalContext from '../../../contexts/ModalContext';
import HiddenMenuContext from '../../../contexts/HiddenMenuContext';
import TasksContext from '../../../contexts/TasksContext';
import MessageContext from '../../../contexts/MessageContext';

import fetchTasksByCategory from '../../../utils/fetchTasksByCategory';
import taskAdd from '../../../utils/taskAdd';

const Task = () => {

    const { categories, catId } = useContext(CategoriesContext);
    const { setModal } = useContext(ModalContext)
    const { setHiddenMenu } = useContext(HiddenMenuContext);
    const { setTasks, isLoading, setIsLoading } = useContext(TasksContext);
    const { message, setMessage } = useContext(MessageContext);


    // Initial state
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [category, setCategory] = useState('');

    const handleSubbmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const mbsession = sessionStorage.getItem("mblog")
        const token = jwt(mbsession);
        const uid = token.data.id;


        const sendData = {
            title: title,
            description: description,
            priority: priority,
            category: category,
            uid: uid
        }

        taskAdd(setCategory, setPriority, setDescription, setTitle, setHiddenMenu, setModal, setIsLoading, catId, setTasks, setMessage, sendData, api);
    }


    return (
        <form onSubmit={handleSubbmit}>
            <article className='inputs__container border-all' >
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
                    <option value={0}>Select Priority</option>
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
                <button className='btn'>Add Task</button>
                {isLoading ? <Loader /> : ''}
            </div>
        </form>
    )
}

export default Task