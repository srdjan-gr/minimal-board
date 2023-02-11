import React, { useContext } from 'react'
import { BiX } from "react-icons/bi";

import HiddenMenuContext from '../../contexts/HiddenMenuContext';

const HiddenMenu = () => {

    const { hiddenMenu, setHiddenMenu } = useContext(HiddenMenuContext);

    const closeHiddenMenu = () => {
        setHiddenMenu({ container: false, option: '' })
    }

    return (
        <article className={`${hiddenMenu.container ? 'toggleHiddenMenu' : ''} hiddenMenu__container background text border-left`}>
            <BiX className='icon-m background-second close-hiddenMenu' onClick={closeHiddenMenu} />

            <div className="hiddenMenu__container-header text-third">
                <h2>Header </h2>
            </div>

            <div className="hiddenMenu__container-inputs">

                {hiddenMenu.option}

            </div>

        </article>
    )
}

export default HiddenMenu