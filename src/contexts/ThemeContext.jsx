import React, { createContext, useState, useEffect } from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    let lsTheme = localStorage.getItem('minimalBoardTheme');

    const [theme, setTheme] = useState(lsTheme);


    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext