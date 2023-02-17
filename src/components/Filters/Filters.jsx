import React, { useContext, useState } from 'react'
import { BiFilter } from "react-icons/bi";
import api from '../../api/api';

import FilterByTime from '../FiterBytime/FilterByTime'
import StatusFilter from '../StatusFilter/StatusFilter'

import TasksContext from '../../contexts/TasksContext';
import CategoriesContext from '../../contexts/CategoriesContext';
import FilterByPriority from '../Filters/FilterByPriority/FilterByPriority';

const Filters = () => {


    const { catId } = useContext(CategoriesContext);
    const { setTasks, setIsLoading, status, setStatus, order, setOrder, priority, setPriority } = useContext(TasksContext);


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

        renderFilters()


        setIsLoading(true)
        api({
            method: 'post',
            url: 'tasks.php?fun=read&opt=all&id=' + catId,
        })
            .then((response) => {
                setTasks(response.data);
                setIsLoading(false)
            });
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const sendData = {
            catId: catId,
            order: order,
            status: status,
        }

        api({
            method: 'post',
            url: 'tasks.php?fun=read&opt=filters',
            data: sendData,
        })
            .then((response) => {

                setTasks(response.data);
                setIsLoading(false);
            });
    }


    return (
        <article className='filters__container'>
            <div className="filters__container-header border-bottom text-third">
                <BiFilter className='icon-m2' />
                <h2>Filters</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <StatusFilter />
                <FilterByTime />
                <FilterByPriority />

                {status === '' && order === '' && priority === '' ?
                    <button className="btn-s mt-1">Filter</button> :

                    <div className="btn-container mt-1">
                        <button className="btn-s">Filter</button>
                        <button className="btn-s" onClick={resetFilter}>X</button>
                    </div>}
            </form>
        </article>
    )
}

export default Filters