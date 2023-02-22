import React, { createContext, useState, useEffect } from 'react'

const BoardContext = createContext();

export const BoardProvider = ({ children }) => {

    // const [sidebarOption, setSidebarOption] = useState({
    //     container: false,
    //     isLoading: false

    // });
    const [sidebarOption, setSidebarOption] = useState(false);

    return (
        <BoardContext.Provider value={{ sidebarOption, setSidebarOption }}>
            {children}
        </BoardContext.Provider>
    )
}

export default BoardContext;