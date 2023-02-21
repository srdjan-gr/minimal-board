import React, { useContext } from 'react'

import TasksContext from '../../../contexts/TasksContext';

const AscDesc = ({ x }) => {

    const { order, setOrder } = useContext(TasksContext);


    return (
        <article className='status__filter border-all text-third' >
            <h2>Asc/Desc</h2>

            <div className="status-group">
                <input
                    type="radio"
                    name="byTime"
                    id="filterDone"
                    onChange={(e) => setOrder('DESC')} />

                <label htmlFor="filterDone">Done First</label>
            </div>
            <div className="status-group">
                <input
                    type="radio"
                    name="byTime"
                    id="filterToDo"
                    onChange={(e) => setOrder('ASC')} />

                <label htmlFor="filterToDo">Todo First</label>
            </div>
        </article>
    )
}

export default AscDesc