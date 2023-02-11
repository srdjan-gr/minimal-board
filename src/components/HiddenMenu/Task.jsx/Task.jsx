import React from 'react'

const Task = () => {


    const handleSubbmit = (e) => {
        e.preventDefault();


    }


    return (
        <article className='inputs__container '>
            <form className=' border-all' onSubmit={handleSubbmit}>
                <label htmlFor="addCategory" className='text-third mb-05'>Task Name</label>
                <input
                    id='addCategory'
                    type="text"
                    placeholder='Enter name...'
                    className='background text border-all mb-2'

                />

                <label htmlFor="addCategory" className='text-third mb-05' >Description</label>
                <input
                    id='addCategory'
                    type="text"
                    placeholder='Enter description...'
                    className='background text border-all'

                />
            </form>

            <button className='btn-s'>Add category</button>
        </article>
    )
}

export default Task