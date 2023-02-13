import React, { createContext, useState, useEffect } from 'react'
// import api from '../api/api'

const TasksEditContext = createContext();

export const TasksEditProvider = ({ children }) => {


    // const [tasksEdit, setTasksEdit] = useState([]);
    const [tasksEdit, setTasksEdit] = useState({
        taskData: [],
        isLoading: false,
    });
    // const [isLoading, setIsLoading] = useState(false);
    // const [status, setStatus] = useState('');
    // const [order, setOrder] = useState('');

    console.log(tasksEdit.taskData)

    return (
        <TasksEditContext.Provider
            value={{ tasksEdit, setTasksEdit }}>
            {children}
        </TasksEditContext.Provider>
    )
}

export default TasksEditContext;