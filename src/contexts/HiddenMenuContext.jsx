import React, { createContext, useState, useEffect } from 'react'
import api from '../api/api'

const HiddenMenuContext = createContext();

export const HiddenMenuProvider = ({ children }) => {

    const [hiddenMenu, setHiddenMenu] = useState({
        container: false,
        option: ''
    });

    // console.log(hiddenMenu);
    return (
        <HiddenMenuContext.Provider
            value={{ hiddenMenu, setHiddenMenu }}>
            {children}
        </HiddenMenuContext.Provider>
    )
}

export default HiddenMenuContext;