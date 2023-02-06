import React, { createContext, useState, useEffect } from 'react'

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {

    const [sidebar, setSidebar] = useState(false);

    const asideMenuStorage = localStorage.getItem('minimalBoardSidebar');

    useEffect(() => {
        if (asideMenuStorage === 'asideClosed') {
            setSidebar(true)
        }
    }, [asideMenuStorage])


    return (
        <SidebarContext.Provider value={{ sidebar, setSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarContext;