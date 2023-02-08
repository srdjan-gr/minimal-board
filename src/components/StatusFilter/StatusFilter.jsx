import React from 'react'
import { BiCheck, BiQuestionMark } from "react-icons/bi";


const StatusFilter = () => {
    return (
        <article className='status__filter border-all text-second'>
            <h2 className='text-second'>Status filter</h2>

            <div className="status-group">
                <input className='background-second' type="checkbox" name="" id="filterDone" />
                <label htmlFor="filterDone">Done</label>

            </div>

            <div className="status-group">
                <input className='background-second ' type="checkbox" name="" id="filterToDo" />
                <label htmlFor="filterToDo">Todo</label>

            </div>


        </article>
    )
}

export default StatusFilter