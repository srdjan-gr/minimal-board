import React, { useContext } from 'react'

import ModalContext from '../../contexts/ModalContext';
import HiddenMenuContext from '../../contexts/HiddenMenuContext';


const Modal = () => {

    const { modal, setModal } = useContext(ModalContext);
    const { hiddenMenu, setHiddenMenu } = useContext(HiddenMenuContext);

    const toggle = () => {
        setModal(!modal)
        setHiddenMenu(!hiddenMenu)
    }

    return (

        <article className={`${modal ? 'toggleModal' : ''} modal__component `} onClick={() => toggle()}></article>
    )
}

export default Modal