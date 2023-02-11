import React, { useState } from 'react'
import api from '../../../api/api';
import Loader from '../../Loader/Loader'

const Task = () => {

    const [isLoading, setIsLoading] = useState(false);

    const handleSubbmit = (e) => {
        e.preventDefault();




    }


    return (
        <form onSubmit={handleSubbmit}>
            <article article className='inputs__container border-all' >
                <label htmlFor="taskName" className='text-third mb-05'>Task Name</label>
                <input
                    id='taskName'
                    type="text"
                    placeholder='Enter name...'
                    className='background text border-all mb-2'

                />

                <label htmlFor="taskDesc" className='text-third mb-05' >Description</label>
                <input
                    id='taskDesc'
                    type="text"
                    placeholder='Enter description...'
                    className='background text border-all mb-2'

                />

                <label htmlFor="selectCategory" className='text-third mb-05' >Task Category</label>
                <select name="cars" id="selectCategory" className='background text border-all mb-2'>
                    <option defaultValue="0">--Select Category--</option>
                    <option defaultValu={0}>{0}</option>

                </select>

            </article>

            <div className="btn__container">
                <button className='btn-s'>Add category</button>
                {isLoading ? <Loader /> : ''}
            </div>
        </form >
    )
}

export default Task