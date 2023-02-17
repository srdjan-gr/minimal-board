import React, { useContext } from 'react'

import TasksContext from '../../../contexts/TasksContext';


const FilterByPriority = () => {

    const { priority, setPriority } = useContext(TasksContext);

    console.log(priority);


    return (
        <article className='status__filter border-all text-third' >
            <h2>Filter by priority</h2>

            <div className="status-group">
                <input
                    type="radio"
                    name="newest"
                    id="newest"
                    onChange={(e) => setPriority(5)} />

                <label htmlFor="newest">From Heigh</label>
            </div>
            <div className="status-group">
                <input
                    type="radio"
                    name="oldest"
                    id="oldest"
                    onChange={(e) => setPriority(1)} />

                <label htmlFor="oldest">From Low</label>
            </div>
        </article>
    )
}

export default FilterByPriority