import React, { useState, useEffect, useContext } from 'react'
import { BiDotsHorizontalRounded, BiCheck } from "react-icons/bi";

import TasksContext from '../../contexts/TasksContext';


const SingleItem = ({ task }) => {

    const { id, task_ime, task_text, uradjen } = task
    // const { tasks, setTasks } = useContext(TasksContext);


    return (
        <div className="box background-second text">
            <div className="box-category-icon">

            </div>

            <div className="box-description">
                <h2>{task_ime}</h2>
                <p className='text-second'>{task_text}</p>
                <button className='btn'>Test btn</button>
            </div>

            <div className="box-icons">
                <BiDotsHorizontalRounded className='icon-m background' />
                <BiCheck className='icon-m background bg-success' />
            </div>
        </div>
    )

}

export default SingleItem