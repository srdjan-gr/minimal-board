import React, { useState, useContext } from 'react'
import api from '../../../api/api';
import Loader from '../../Loader/Loader'

import CategoriesContext from '..//../../contexts/CategoriesContext';
import ModalContext from '../../../contexts/ModalContext';
import HiddenMenuContext from '../../../contexts/HiddenMenuContext';
import MessageContext from '../../../contexts/MessageContext'

import categoryAdd from '../../../utils/categoryAdd';
import categoryEdit from '../../../utils/categoryEdit';
import categoryDelete from '../../../utils/categoryDelete';


const BoardOptions = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { setModal } = useContext(ModalContext)
    const { setHiddenMenu } = useContext(HiddenMenuContext);
    const { categories, setCategories, setAdd, add } = useContext(CategoriesContext)
    const { message, setMessage } = useContext(MessageContext)


    const [options, setOptions] = useState([])

    const [editOption, setEditOption] = useState('')
    const [title, setTitle] = useState('')



    const handleDelete = (e) => {
        e.preventDefault()
        let x = options.split(',')
        setIsLoading(true);

        const sendData = {
            id: x[0],
        }

        categoryDelete(sendData, setIsLoading, setModal, setHiddenMenu, api, setMessage, setAdd)
    }


    // Sends data for editing to api
    const handleEdit = (e) => {
        e.preventDefault()
        let x = options.split(',')

        setIsLoading(true);

        const sendData = {
            id: x[0],
            title: title,
        }

        categoryEdit(sendData, setIsLoading, setModal, setHiddenMenu, api, setMessage, setAdd)
    }


    // Edit button opens form and sets Name to edit
    const edit = (e) => {
        e.preventDefault()
        let x = options.split(',')

        setEditOption('edit')
        setTitle(x[1])
    }


    return (
        <article>
            <form onSubmit={handleDelete} >
                <article className='inputs__container border-all'>
                    <label htmlFor="addCategory" className='text-third mb-05'>Select Board</label>
                    <select
                        id="selectCategory"
                        className='background text border-all mb-1'
                        onChange={(e) => setOptions(e.target.value)}
                    >
                        <option value=''>Select Category</option>
                        {categories.map((category) => {
                            return (
                                <option key={category.id_cat} name={category.id_cat} value={[category.id_cat, category.cat_name]} >{category.cat_name}</option>
                            )
                        })}
                    </select>
                </article>

                {options != '' ?
                    <div className="btn__container mb-2">
                        <button className='btn-s' onClick={handleDelete}>Delete board</button>
                        <button className='btn-s' onClick={edit}>Edit board</button>
                    </div>
                    : ''}

            </form>

            {editOption === 'edit' ?
                <form form onSubmit={handleEdit} >
                    <article className='inputs__container border-all mt-1'>
                        <label htmlFor="addCategory" className='text-third mb-05'>Edit Board</label>
                        <input
                            id='addCategory'
                            type="text"
                            placeholder='Board name...'
                            className='background text border-all'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <div className="btn__container mt-2">
                            <button className='btn-s'>Edit</button>
                        </div>
                    </article>
                </form> : ''}

        </article>
    )
}

export default BoardOptions