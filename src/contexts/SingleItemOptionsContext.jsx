import React, { createContext, useState, useEffect } from 'react'
import api from '../api/api'

const SingleItemOptionsContext = createContext();

export const SingleItemOptionsProvider = ({ children }) => {

    const [itemsMenu, setItemsMenu] = useState({
        container: false,
        option: '',
        optionName: '',
        itemId: ''
    });

    // console.log(hiddenMenu);
    return (
        <SingleItemOptionsContext.Provider
            value={{ itemsMenu, setItemsMenu }}>
            {children}
        </SingleItemOptionsContext.Provider>
    )
}

export default SingleItemOptionsContext;