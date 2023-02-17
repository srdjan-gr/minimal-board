import React, { createContext, useState, useEffect } from 'react'
// import api from '../api/api'

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {


    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [order, setOrder] = useState('');
    const [priority, setPriority] = useState('');

    console.log(tasks)

    return (
        <TasksContext.Provider
            value={{ tasks, setTasks, setIsLoading, isLoading, status, setStatus, order, setOrder, priority, setPriority }}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksContext;