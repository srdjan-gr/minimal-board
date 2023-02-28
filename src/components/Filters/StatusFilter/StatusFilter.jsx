import React, { useContext } from 'react'
import { BiX } from "react-icons/bi";

import TasksContext from '../../../contexts/TasksContext';

const StatusFilter = ({ filterStatus, setFilterStatus }) => {

    const { setStatus } = useContext(TasksContext);


    const handleRadio = (e) => {
        setFilterStatus(e.target.value);
    }


    return (
        <article className='status__filter border-all text-third' >
            <h2>Filter by status</h2>

            <div className="status-group">
                <input type="radio"
                    name="byStatus"
                    id="filterDone"
                    value={'check'}
                    checked={filterStatus === 'check'}


                    onChange={handleRadio}
                    onClick={(e) => setStatus(1)}
                />

                <label htmlFor="filterDone">Done</label>
            </div>
            <div className="status-group">
                <input type="radio"
                    name="byStatus"
                    id="filterToDo"
                    value={'nocheck'}
                    checked={filterStatus === 'nocheck'}

                    onChange={handleRadio}
                    onClick={(e) => setStatus(0)}
                />

                <label htmlFor="filterToDo">Todo</label>
            </div>
        </article>
    )
}

export default StatusFilter