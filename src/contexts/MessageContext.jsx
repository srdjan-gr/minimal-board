import React, { createContext, useState, useEffect } from 'react'
import api from '../api/api'

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {

    const [message, setMessage] = useState({
        container: false,
        response: '',
        text: ''
    });

    return (
        <MessageContext.Provider value={{ message, setMessage }}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageContext;