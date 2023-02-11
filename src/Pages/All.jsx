import React, { useState, useEffect, useContext } from 'react'
import { BiFilter, BiListOl } from "react-icons/bi";
import { useParams } from 'react-router-dom';


import Breadcrumb from '../components/Bradcrumb/Breadcrumb';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';
import Filters from '../components/Filters/Filters';
import Header from '../components/Header/Header'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import Loader from '../components/Loader/Loader';
import Sidebar from '../components/Sidebar/Sidebar'
import SingleItem from '../components/SingleItem/SingleItem';
import StatusFilter from '../components/StatusFilter/StatusFilter';

import SidebarContext from '../contexts/SidebarContext';

import TasksContext from '../contexts/TasksContext';

const All = () => {

    const { tasks, setTasks, isLoading } = useContext(TasksContext);
    const { sidebar } = useContext(SidebarContext)
    const [headerMenu, setHeaderMenu] = useState(false);

    let { categoryid } = useParams();


    return (
        <div>
            <Header headerMenu={headerMenu} setHeaderMenu={setHeaderMenu} />
            <Breadcrumb />
            <HeaderMenu headerMenu={headerMenu} />
            <Sidebar />


            <main className={`${sidebar === true ? 'toggleMainContent' : ''} background text border-left`}>

                <div className='main__all-container'>

                    {tasks.length > 0 ? <Filters /> : ''}

                    <div className="main__all-container-content">

                        <div className="filters__container-header border-bottom text-third">
                            <BiListOl className='icon-m2' />
                            <h2>Tasks</h2>
                            <h2 >( {tasks.length} )</h2>
                        </div>

                        <div div className="grid__container">
                            {
                                isLoading === true ? <Loader /> :
                                    tasks.length === 0 ? <ErrorComponent error='notasks' /> :
                                        tasks.map((task, idx) => {

                                            return (
                                                <SingleItem key={task.id_task} task={task} />
                                            )
                                        })
                            }
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default All