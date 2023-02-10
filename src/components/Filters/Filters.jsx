import React from 'react'
import { BiFilter } from "react-icons/bi";
import FilterByTime from '../FiterBytime/FilterByTime'
import StatusFilter from '../StatusFilter/StatusFilter'

const Filters = () => {
    return (
        <article className='filters__container'>

            <div className="filters__container-header border-bottom text-second">
                <BiFilter className='icon-m' />
                <h2>Filters</h2>
            </div>


            <StatusFilter />
            <FilterByTime />

        </article>
    )
}

export default Filters