import React, { useContext } from 'react'
import { BiX } from "react-icons/bi";

import HiddenMenuContext from '../../contexts/HiddenMenuContext';
import Category from './Category.jsx/Category';
import Task from './Task.jsx/Task';

const HiddenMenu = () => {

    const { hiddenMenu, setHiddenMenu } = useContext(HiddenMenuContext);


    const closeHiddenMenu = () => {
        setHiddenMenu({ container: false, option: '' });
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
                            ''
                }
            </div>

        </article>
    )
}

export default HiddenMenu