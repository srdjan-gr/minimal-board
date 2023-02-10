import React, { useState, useContext } from 'react'
import { BiX } from "react-icons/bi";
import api from '../../api/api';

import TasksContext from '../../contexts/TasksContext';
import CategoriesContext from '../../contexts/CategoriesContext';

const FilterByTime = () => {

    const { catId } = useContext(CategoriesContext);
    const { setTasks, setIsLoading, status } = useContext(TasksContext);
    const [order, setOrder] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        api({
            method: 'post',
            url: 'tasks.php?fun=read&opt=time&status=' + status + '&order=' + order + '&id=' + catId,
        })
            .then((response) => {

                setTasks(response.data);
                setIsLoading(false);
            });
    }

    return (
        <article className='status__filter border-all text-second' >
            <h2 className='text-second'>Filter by time</h2>

            <form onSubmit={handleSubmit}>
                <div className="status-group">
                    <input
                        type="radio"
                        name="filter"
                        id="filterDone"
                        onChange={(e) => setOrder('ASC')} />

                    <label htmlFor="filterDone">From Newest</label>
                </div>
                <div className="status-group">
                    <input
                        type="radio"
                        name="filter"
                        id="filterToDo"
                        onChange={(e) => setOrder('DESC')} />

                    <label htmlFor="filterToDo">From Oldest</label>
                </div>

                {order == '' ?
                    <button className="btn-s mt-1">Filter</button> :
                    (
                        <div className="btn-container mt-1">
                            <button className="btn-s">Filter</button>
                            <button className="btn-s">X</button>
                        </div>
                    )}
            </form>
        </article>
    )
}

export default FilterByTime