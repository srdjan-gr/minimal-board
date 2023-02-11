import React, { useContext } from 'react'
import { BiLogOutCircle, BiCog, BiListOl } from "react-icons/bi";

import OptionsMenuContext from '../../contexts/OptionsMenuContext';
import HiddenMenuContext from '../../contexts/HiddenMenuContext';
import ModalContext from '../../contexts/ModalContext';

// import headerOptions from '../../data';

const HeaderMenu = () => {

    const { optionsMenuContainer, setOptionsMenuContainer, option, setOption } = useContext(OptionsMenuContext)
    const { hiddenMenu, setHiddenMenu } = useContext(HiddenMenuContext);
    const { modal, setModal } = useContext(ModalContext)

    const openHiddenMenu = (option) => {

        switch (option) {

            case 'category':
                setHiddenMenu({ container: true, option: 'category', optionName: "Add Category" })
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
                        <span className='icon-letter background-second'>C</span>
                        <h3>Category</h3>
                    </div>
                    <div className='header__menu-single' onClick={() => openHiddenMenu('task')}>
                        <BiListOl className='icon-m background-second' />
                        <h3>Task</h3>
                    </div>
                </article>
            )
            break;

        case 'options':
            return (
                <article className={`${optionsMenuContainer ? 'toggleHeaderMenu' : ''} header__menu right-1 text background border-all`}>
                    <div className='header__menu-single'>
                        <BiCog className='icon-m background-second' />
                        <h3>Settings</h3>
                    </div>
                    <div className='header__menu-single'>
                        <BiLogOutCircle className='icon-m background-second' />
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