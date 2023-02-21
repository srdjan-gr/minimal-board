import React, { useState, useContext } from 'react'
import api from '../../../api/api';
import Loader from '../../Loader/Loader'

import CategoriesContext from '..//../../contexts/CategoriesContext';
import ModalContext from '../../../contexts/ModalContext';
import HiddenMenuContext from '../../../contexts/HiddenMenuContext';
import MessageContext from '../../../contexts/MessageContext'

import categoryAdd from '../../../utils/categoryAdd';

const Category = () => {

    // Initial state
    const [addCategoryData, setAddCategoryData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { setModal } = useContext(ModalContext)
    const { setHiddenMenu } = useContext(HiddenMenuContext);
    const { categories, setCategories, catId, setCatId, setAdd } = useContext(CategoriesContext);
    const { message, setMessage } = useContext(MessageContext)


    const handleSubbmit = (e) => {
        e.preventDefault()

        setIsLoading(true);

        const sendData = {
            category: addCategoryData,
        }

        categoryAdd(setAdd, setIsLoading, setModal, setHiddenMenu, setAddCategoryData, setMessage, api, sendData);

    }


    return (
        <form onSubmit={handleSubbmit}>

            <article className='inputs__container border-all'>
                <label htmlFor="addCategory" className='text-third mb-05'>Category Name</label>
                <input
                    id='addCategory'
                    type="text"
                    placeholder='Enter name...'
                    className='background text border-all'
                    value={addCategoryData}
                    onChange={(e) => setAddCategoryData(e.target.value)}
                />
            </article>


            <div className="btn__container">
                <button className='btn-s'>Add category</button>
                {isLoading ? <Loader /> : ''}
            </div>
        </form>

    )
}

export default Category