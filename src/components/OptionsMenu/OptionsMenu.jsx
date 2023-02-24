import React, { useContext } from 'react'
import { BiLogOutCircle, BiCog, BiListOl } from "react-icons/bi";

import { Navigate, useNavigate } from 'react-router-dom'

import OptionsMenuContext from '../../contexts/OptionsMenuContext';
import HiddenMenuContext from '../../contexts/HiddenMenuContext';
import ModalContext from '../../contexts/ModalContext';

// import headerOptions from '../../data';

const HeaderMenu = () => {

    const { optionsMenuContainer, setOptionsMenuContainer, option, setOption } = useContext(OptionsMenuContext)
    const { hiddenMenu, setHiddenMenu } = useContext(HiddenMenuContext);
    const { modal, setModal } = useContext(ModalContext)

    const navigate = useNavigate();

    const sessionKill = () => {
        sessionStorage.removeItem('mblog')
        navigate('/')
    }


    const openHiddenMenu = (option) => {

        switch (option) {

            case 'category':
                setHiddenMenu({ container: true, option: 'category', optionName: "Add Board" })
                setOptionsMenuContainer(!optionsMenuContainer)
                setModal(true)
                break;

            case 'task':
                setHiddenMenu({ container: true, option: 'addTask', optionName: "Add Task" })
                setOptionsMenuContainer(!optionsMenuContainer)
                setModal(true)
                break;

            default:
                break;
        }
    }


    switch (option) {
        case 'add':
            return (
                <article className={`${optionsMenuContainer ? 'toggleHeaderMenu' : ''} header__menu right-1 text background border-all`}>
                    <div className='header__menu-single' onClick={() => openHiddenMenu('category')}>
                        <span className='icon-letter mobile-icon background-second'>B</span>
                        <h3>Board</h3>
                    </div>
                    <div className='header__menu-single' onClick={() => openHiddenMenu('task')}>
                        <BiListOl className='icon-m mobile-icon background-second' />
                        <h3>Task</h3>
                    </div>
                </article>
            )
            break;

        case 'options':
            return (
                <article className={`${optionsMenuContainer ? 'toggleHeaderMenu' : ''} header__menu right-1 text background border-all`}>
                    <div className='header__menu-single'>
                        <BiCog className='icon-m mobile-icon background-second' />
                        <h3>Settings</h3>
                    </div>
                    <div className='header__menu-single' onClick={sessionKill}>
                        <BiLogOutCircle className='icon-m mobile-icon background-second' />
                        <h3>Log Out</h3>
                    </div>
                </article>
            )
            break;

        default:
            break;
    }

}

export default HeaderMenu