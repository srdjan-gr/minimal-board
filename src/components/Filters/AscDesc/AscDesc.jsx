import React, { useContext } from 'react'

import TasksContext from '../../../contexts/TasksContext';

const AscDesc = ({ asc, setAsc }) => {

    const { order, setOrder } = useContext(TasksContext);


    const handleRadio = (e) => {
        setAsc(e.target.value);
    }


    return (
        <article className='status__filter border-all text-third' >
            <h2>Asc/Desc</h2>

            <div className="status-group">
                <input
                    type="radio"
                    value='check'
                    checked={asc === 'check'}
                    id="filterDescDone"
                    onChange={handleRadio}
                    onClick={(e) => setOrder('DESC')}
                />

                <label htmlFor="filterDescDone">Done First</label>
            </div>
            <div className="status-group">
                <input
                    type="radio"
                    value='nocheck'
                    checked={asc === 'nocheck'}
                    id="filterAscDone"
                    onChange={handleRadio}
                    onClick={(e) => setOrder('ASC')}
                />

                <label htmlFor="filterAscDone">Todo First</label>
            </div>
        </article>

    )
}

export default AscDesc