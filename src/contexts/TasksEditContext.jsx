import React, { createContext, useState, useEffect } from 'react'
// import api from '../api/api'

const TasksEditContext = createContext();

export const TasksEditProvider = ({ children }) => {


    const [tasksEdit, setTasksEdit] = useState({
        taskData: [],
        isLoading: false,
    });


    return (
        <TasksEditContext.Provider
            value={{ tasksEdit, setTasksEdit }}>
            {children}
        </TasksEditContext.Provider>
    )
}

export default TasksEditContext;