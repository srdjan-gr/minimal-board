import React, { createContext, useState, useEffect } from 'react'
// import api from '../api/api'

const TasksContext = createContext();

export const TasksProvider = ({ children }) => {


    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');

    return (
        <TasksContext.Provider value={{ tasks, setTasks, setIsLoading, isLoading, status, setStatus }}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksContext;