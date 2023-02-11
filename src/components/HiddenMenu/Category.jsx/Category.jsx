import React, { useState, useContext } from 'react'
import api from '../../../api/api';
import Loader from '../../Loader/Loader'

import CategoriesContext from '..//../../contexts/CategoriesContext';

const Category = () => {

    // Initial state
    const [addCategory, setAddCategory] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { categories, setCategories, catId, setCatId, setAdd } = useContext(CategoriesContext);

    console.log(addCategory);

    const handleSubbmit = (e) => {
        e.preventDefault()

        setIsLoading(true);

        const sendData = {
            category: addCategory,
        }

        api({
            method: 'post',
            url: 'category.php?fun=add',
            data: sendData,
        })
            .then((response) => {
                setAdd(true)
                setIsLoading(false);
                setAddCategory('');
            });
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
                    value={addCategory}
                    onChange={(e) => setAddCategory(e.target.value)}
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