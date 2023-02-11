import React, { createContext, useState } from 'react'

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const [modal, setModal] = useState(false);

    // console.log(modal)

    return (
        <ModalContext.Provider
            value={{ modal, setModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;