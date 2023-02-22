import React, { useContext } from 'react'
import { BiX } from "react-icons/bi";

import HiddenMenuContext from '../../contexts/HiddenMenuContext';
import ModalContext from '../../contexts/ModalContext';
import BoardOptions from './BoardOptions/BoardOptions';

import Category from './Category.jsx/Category';
import MobileMenu from './MobileMenu/MobileMenu';
import Task from './Task.jsx/Task';
import TaskEdit from './TaskEdit/TaskEdit';

const HiddenMenu = () => {

    const { hiddenMenu, setHiddenMenu } = useContext(HiddenMenuContext);
    const { modal, setModal } = useContext(ModalContext)


    const closeHiddenMenu = () => {
        setHiddenMenu({ container: false, option: '' });
        setModal(false)
    }


    return (
        <article className={`${hiddenMenu.container ? 'toggleHiddenMenu' : ''} hiddenMenu__container background text border-left`}>

            <div className="hiddenMenu__container-header">
                <h2 className="text-third">{hiddenMenu.optionName}</h2>
                <BiX className='icon-m background-second close-hiddenMenu' onClick={closeHiddenMenu} />
            </div>

            <div className="hiddenMenu__container-inputs">
                {
                    hiddenMenu.option === 'category' ? <Category /> :
                        hiddenMenu.option === 'addTask' ? <Task /> :
                            hiddenMenu.option === 'editTask' ? <TaskEdit /> :
                                hiddenMenu.option === 'mobileMenu' ? <MobileMenu /> :
                                    hiddenMenu.option === 'boardOptions' ? <BoardOptions /> :
                                        ''
                }
            </div>

        </article>
    )
}

export default HiddenMenu