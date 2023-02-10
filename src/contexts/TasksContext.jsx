import React, { createContext, useState, useEffect } from 'react'
// import api from '../api/api'

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {


    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [order, setOrder] = useState('');

    // console.log(status, order)

    return (
        <TasksContext.Provider value={{ tasks, setTasks, setIsLoading, isLoading, status, setStatus, order, setOrder }}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksContext;