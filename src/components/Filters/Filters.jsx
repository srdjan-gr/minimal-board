import React, { useContext } from 'react'
import { BiFilter } from "react-icons/bi";
import api from '../../api/api';

import FilterByTime from '../FiterBytime/FilterByTime'
import StatusFilter from '../StatusFilter/StatusFilter'

import TasksContext from '../../contexts/TasksContext';
import CategoriesContext from '../../contexts/CategoriesContext';

const Filters = () => {


    const { catId } = useContext(CategoriesContext);
    const { setTasks, setIsLoading, status, order, setOrder } = useContext(TasksContext);


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
            <div className="filters__container-header border-bottom text-second">
                <BiFilter className='icon-m' />
                <h2>Filters</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <StatusFilter />
                <FilterByTime />

                {status === '' && order === '' ?
                    <button className="btn-s">Filter</button> :

                    <div className="btn-container">
                        <button className="btn-s">Filter</button>
                        <button className="btn-s">X</button>
                    </div>}
            </form>
        </article>
    )
}

export default Filters