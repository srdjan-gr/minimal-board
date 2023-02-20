import React, { useContext, useState } from 'react'
import { BiFilter, BiChevronDown } from "react-icons/bi";
import api from '../../api/api';

import FilterByTime from '../FiterBytime/FilterByTime'
import StatusFilter from '../StatusFilter/StatusFilter'

import TasksContext from '../../contexts/TasksContext';
import CategoriesContext from '../../contexts/CategoriesContext';
import FilterByPriority from '../Filters/FilterByPriority/FilterByPriority';
import fetchTasksByCategory from '../../utils/fetchTasksByCategory';
import filtersFetch from '../../utils/filtersFetch';

const Filters = () => {

    const [filters, setFilters] = useState(false);


    const { catId } = useContext(CategoriesContext);
    const { setTasks,
        setIsLoading,
        status,
        setStatus,
        order,
        setOrder,
        priority,
        setPriority } = useContext(TasksContext);


    // const renderFilters = () => {
    //     return (
    //         <div>
    //             <StatusFilter />
    //             <FilterByTime />
    //             <FilterByPriority />
    //         </div>
    //     )
    // }

    const resetFilter = (e) => {

        e.preventDefault();
        setStatus('');
        setOrder('');

        // renderFilters()

        setIsLoading(true)

        fetchTasksByCategory(catId, setTasks, setIsLoading, api)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const sendData = {
            catId: catId,
            order: order,
            status: status,
            priority: priority
        }

        filtersFetch(sendData, api, setIsLoading, setTasks);

    }


    // Filters container on MObile devices
    const openMobileFilters = () => {
        setFilters(!filters)
    }


    return (
        <article className='filters__container'>
            <div className="filters__container-header border-bottom text-third">
                <BiFilter className='icon-m2' />
                <h2>Filters</h2>
                <BiChevronDown className={`${filters ? 'icon-rotate-180' : ''} icon-m2 mobileFilterIcon`} onClick={openMobileFilters} />
            </div>

            <div className={`${filters ? 'filtersFormActive' : ''} filters-form`} >
                <form form onSubmit={handleSubmit}>
                    <StatusFilter />
                    <FilterByTime />
                    <FilterByPriority />

                    {status === '' && order === '' && priority === '' ?
                        '' :

                        <div className="btn-container mt-1">
                            <button className="btn-s">Filter</button>
                            <button className="btn-s" onClick={resetFilter}>X</button>
                        </div>}
                </form>
            </div>
        </article>
    )
}

export default Filters