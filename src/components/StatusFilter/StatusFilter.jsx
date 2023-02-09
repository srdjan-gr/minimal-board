import React, { useState, useContext } from 'react'
import { BiCheck, BiQuestionMark } from "react-icons/bi";
import api from '../../api/api';

import TasksContext from '../../contexts/TasksContext';
import CategoriesContext from '../../contexts/CategoriesContext';


const StatusFilter = () => {

    const { catId } = useContext(CategoriesContext);
    const { setTasks, setIsLoading } = useContext(TasksContext);
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        api({
            method: 'post',
            url: 'tasks.php?fun=read&opt=status&status=' + status + '&id=' + catId,
        })
            .then((response) => {
                setTasks(response.data);
                setIsLoading(false);
            });

    }

    return (

        <article className='status__filter border-all text-second' >
            <h2 className='text-second'>Filter by status</h2>

            <form onSubmit={handleSubmit}>
                <div className="status-group">
                    <input type="radio"
                        name="filter"
                        id="filterDone"
                        value={1}
                        onChange={(e) => setStatus(e.target.value)} />

                    <label htmlFor="filterDone">Done</label>
                </div>
                <div className="status-group">
                    <input type="radio"
                        name="filter"
                        id="filterToDo"
                        value={0}
                        onChange={(e) => setStatus(e.target.value)} />

                    <label htmlFor="filterToDo">Todo</label>
                </div>

                <button className="btn-s mt-1">Filter</button>
            </form>
        </article>
    )
}

export default StatusFilter