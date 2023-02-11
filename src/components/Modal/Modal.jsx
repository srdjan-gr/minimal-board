import React, { useContext } from 'react'

import ModalContext from '../../contexts/ModalContext';

const Modal = () => {

    const { modal, setModal } = useContext(ModalContext);

    return (

        <article className={`${modal ? 'toggleModal' : ''} modal__component `} ></article>
    )
}

export default Modal