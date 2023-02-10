import React, { useContext } from 'react'
import { BiX } from "react-icons/bi";

import TasksContext from '../../contexts/TasksContext';

const FilterByTime = () => {

    const { setOrder } = useContext(TasksContext);

    return (
        <article className='status__filter border-all text-second' >
            <h2 className='text-second'>Filter by time</h2>


            <div className="status-group">
                <input
                    type="radio"
                    name="byTime"
                    id="filterDone"
                    onChange={(e) => setOrder('ASC')} />

                <label htmlFor="filterDone">From Newest</label>
            </div>
            <div className="status-group">
                <input
                    type="radio"
                    name="byTime"
                    id="filterToDo"
                    onChange={(e) => setOrder('DESC')} />

                <label htmlFor="filterToDo">From Oldest</label>
            </div>

        </article>
    )
}

export default FilterByTime