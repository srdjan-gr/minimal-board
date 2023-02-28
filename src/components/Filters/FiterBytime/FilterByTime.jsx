import React, { useContext } from 'react'

import TasksContext from '../../../contexts/TasksContext';

const FilterByTime = ({ filterTime, setFilterTime }) => {

    const { order, setOrder } = useContext(TasksContext);


    const handleRadio = (e) => {
        setFilterTime(e.target.value);
    }


    return (
        <article className='status__filter border-all text-third' >
            <h2>Filter by time</h2>

            <div className="status-group">
                <input
                    type="radio"
                    value='check'
                    checked={filterTime === 'check'}
                    id="filterDone"
                    onChange={handleRadio}
                    onClick={(e) => setOrder('DESC')}
                />

                <label htmlFor="filterDone">Newest First</label>
            </div>
            <div className="status-group">
                <input
                    type="radio"
                    value='nocheck'
                    checked={filterTime === 'nocheck'}
                    name="byTime"
                    id="filterToDo"
                    onChange={handleRadio}
                    onClick={(e) => setOrder('ASC')}
                />

                <label htmlFor="filterToDo">Oldest First</label>
            </div>
        </article>
    )
}

export default FilterByTime