import React, { useState, useContext } from 'react'
import api from '../../../api/api';
import jwt from 'jwt-decode'
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

        const mbsession = sessionStorage.getItem("mblog")
        const token = jwt(mbsession);
        const uid = token.data.id;

        setIsLoading(true);

        const sendData = {
            category: addCategoryData,
            uid: uid
        }

        categoryAdd(setAdd, setIsLoading, setModal, setHiddenMenu, setAddCategoryData, setMessage, api, sendData);
    }


    return (
        <form onSubmit={handleSubbmit}>

            <article className='inputs__container border-all'>
                <label htmlFor="addCategory" className='text-third mb-05'>Board Name</label>
                <input
                    id='addCategory'
                    type="text"
                    placeholder='Enter board name...'
                    className='background text border-all'
                    value={addCategoryData}
                    onChange={(e) => setAddCategoryData(e.target.value)}
                />
            </article>


            <div className="btn__container">
                <button className='btn-s'>Add board</button>
                {isLoading ? <Loader /> : ''}
            </div>
        </form>

    )
}

export default Category