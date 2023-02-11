import React, { createContext, useState, useEffect } from 'react'
import api from '../api/api'

const OptionsMenuContext = createContext();

export const OptionsMenuProvider = ({ children }) => {

    const [optionsMenuContainer, setOptionsMenuContainer] = useState(false);
    const [option, setOption] = useState('');

    return (
        <OptionsMenuContext.Provider
            value={{ optionsMenuContainer, setOptionsMenuContainer, option, setOption }}>
            {children}
        </OptionsMenuContext.Provider>
    )
}

export default OptionsMenuContext;