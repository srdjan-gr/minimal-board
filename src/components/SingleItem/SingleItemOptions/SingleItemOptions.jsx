import React, { useContext } from 'react'
import { BiEditAlt, BiShow } from "react-icons/bi";
import api from '../../../api/api';


import SingleItemOptionsContext from '../../../contexts/SingleItemOptionsContext'

const SingleItemOptions = ({ id }) => {

    const { itemsMenu, setItemsMenu } = useContext(SingleItemOptionsContext)

    const openHiddenMenu = (option) => {

    }


    const deleteItem = (id) => {
        console.log(id)
    }


    return (
        // Class for toolge component will be add only if 2 ids are the same
        // Preventing that on Single Task click Options component will be opend in All Tasks
        <article className={`${itemsMenu.container && id == itemsMenu.itemId ? 'singleItemOptionsToggle' : ''} singleItemOptions__container background text border-all`}>
            <div className='header__menu-single' onClick={() => openHiddenMenu('details')}>
                <BiShow className='icon-m background-second' />
                <h3>Details</h3>
            </div>
            <div className='header__menu-single' onClick={() => openHiddenMenu('edit')}>
                <BiEditAlt className='icon-m background-second' />
                <h3>Edit</h3>
            </div>
            <div className='header__menu-single' onClick={() => deleteItem(id)}>
                <BiEditAlt className='icon-m background-second' />
                <h3>Delete</h3>
            </div>
        </article>
    )
}

export default SingleItemOptions