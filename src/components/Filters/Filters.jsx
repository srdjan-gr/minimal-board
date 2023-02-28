import React, { useContext, useState, useEffect } from 'react'
import { BiFilter, BiChevronDown } from "react-icons/bi";
import api from '../../api/api';

import AscDesc from './AscDesc/AscDesc';
import FilterByTime from './FiterBytime/FilterByTime'
import StatusFilter from './StatusFilter/StatusFilter'
import FilterByPriority from './FilterByPriority/FilterByPriority';

import TasksContext from '../../contexts/TasksContext';
import CategoriesContext from '../../contexts/CategoriesContext';
import fetchTasksByCategory from '../../utils/fetchTasksByCategory';
import filtersFetch from '../../utils/filtersFetch';

const Filters = () => {

    const [filters, setFilters] = useState(false);
    const [asc, setAsc] = useState('');
    const [filterTime, setFilterTime] = useState('');
    const [filterStatus, setFilterStatus] = useState('');


    const { catId } = useContext(CategoriesContext);
    const { setTasks,
        setIsLoading,
        status,
        setStatus,
        order,
        setOrder,
        priority,
        setPriority } = useContext(TasksContext);


    const resetFilter = (e) => {

        e.preventDefault();
        setFilters(false)
        setStatus('');
        setOrder('');
        setPriority('')

        setAsc('')
        setFilterTime('')
        setFilterStatus('')

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

        setFilters(false)
        setStatus('');
        setOrder('');
        setPriority('')

        setAsc('')
        setFilterTime('')
        setFilterStatus('')
    }


    // Filters container on MObile devices
    const openMobileFilters = () => {
        setFilters(!filters)
    }


    return (
        <article className='filters__container'>
            <div className="filters__container-header border-bottom text-third" onClick={openMobileFilters}>
                <BiFilter className='icon-m2' />
                <h2>Filters</h2>
                <BiChevronDown className={`${filters ? 'icon-rotate-180' : ''} icon-m2 mobileFilterIcon`} />
            </div>

            <div className={`${filters ? 'filtersFormActive' : ''} filters-form`} >
                <form onSubmit={handleSubmit}>


                    <AscDesc asc={asc} setAsc={setAsc} />
                    <StatusFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
                    <FilterByTime filterTime={filterTime} setFilterTime={setFilterTime} />
                    <FilterByPriority />

                    {status == '' && order == '' && priority == '' ? '' :

                        <div className="btn__container mt-1">
                            <button className="btn-s" onClick={openMobileFilters}>Filter</button>
                            <button className="btn-s" onClick={(e) => resetFilter(e)}>X</button>
                        </div>}
                </form>
            </div>
        </article>
    )
}

export default Filters