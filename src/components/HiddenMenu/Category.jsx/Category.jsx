import React from 'react'

const Category = () => {


    const handleSubbmit = (e) => {
        e.preventDefault()


    }


    return (
        <article className='inputs__container '>
            <form className=' border-all' onSubmit={handleSubbmit}>
                <label htmlFor="addCategory" className='text-second mb-05'>Category Name</label>
                <input
                    id='addCategory'
                    type="text"
                    placeholder='Enter name...'
                    // className='background border-all text'
                    className='background text border-all'

                />
            </form>

            <button className='btn-s'>Add category</button>
        </article>
    )
}

export default Category