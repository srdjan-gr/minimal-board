import React, { useContext } from 'react'

import TasksContext from '../../../contexts/TasksContext';


const FilterByPriority = () => {

    const { priority, setPriority } = useContext(TasksContext);
    const data = [1, 2, 3, 4, 5];


    return (
        <article className='status__filter border-all text-third' >
            <h2>Filter by priority</h2>

            <div className="status-group ">
                <select className='text-third border-all background'
                    name="" id="" value={priority}
                    onChange={(e) => setPriority(e.target.value)}>

                    <option >Select Priority</option>
                    {data.map((d, idx) => {
                        return (
                            <option key={idx} >{d}</option>
                        )
                    })}

                </select>
            </div>
        </article>
    )
}

export default FilterByPriority