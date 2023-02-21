import React, { useContext } from 'react'
import { BiX } from "react-icons/bi";

import TasksContext from '../../../contexts/TasksContext';

const StatusFilter = () => {

    const { setStatus } = useContext(TasksContext);

    return (
        <article className='status__filter border-all text-third' >
            <h2>Filter by status</h2>

            <div className="status-group">
                <input type="radio"
                    name="byStatus"
                    id="filterDone"
                    value={1}
                    onChange={(e) => setStatus(e.target.value)} />

                <label htmlFor="filterDone">Done</label>
            </div>
            <div className="status-group">
                <input type="radio"
                    name="byStatus"
                    id="filterToDo"
                    value={0}
                    onChange={(e) => setStatus(e.target.value)} />

                <label htmlFor="filterToDo">Todo</label>
            </div>
        </article>
    )
}

export default StatusFilter