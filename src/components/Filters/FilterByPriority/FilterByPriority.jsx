import React, { useContext } from 'react'

import TasksContext from '../../../contexts/TasksContext';


const FilterByPriority = () => {

    const { priority, setPriority } = useContext(TasksContext);

    return (
        <article className='status__filter border-all text-third' >
            <h2>Filter by priority</h2>

            <div className="status-group ">
                <select className='text-third border-all background' name="" id="" onChange={(e) => setPriority(e.target.value)}>
                    <option value=''>Select Priority</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
        </article>
    )
}

export default FilterByPriority