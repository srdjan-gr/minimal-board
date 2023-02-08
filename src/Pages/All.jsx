import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Bradcrumb/Breadcrumb';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';

import Header from '../components/Header/Header'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import Loader from '../components/Loader/Loader';
import Sidebar from '../components/Sidebar/Sidebar'
import SingleItem from '../components/SingleItem/SingleItem';

import SidebarContext from '../contexts/SidebarContext';
// import CategoriesContext from '../contexts/CategoriesContext';

import TasksContext from '../contexts/TasksContext';

const All = () => {
    // const { categories, setCategories } = useContext(CategoriesContext);

    const { tasks, setTasks, isLoading } = useContext(TasksContext);

    let { categoryid } = useParams();

    const { sidebar } = useContext(SidebarContext)
    const [headerMenu, setHeaderMenu] = useState(false);

    return (
        <div>
            <Header headerMenu={headerMenu} setHeaderMenu={setHeaderMenu} />
            <Breadcrumb />
            <HeaderMenu headerMenu={headerMenu} />
            <Sidebar />


            <main className={`${sidebar === true ? 'toggleMainContent' : ''} background text border-left`}>

                <div className="grid__container">
                    {
                        isLoading === true ? <Loader /> :
                            tasks.length === 0 ? <ErrorComponent error='notasks' /> :
                                tasks.map((task, idx) => {

                                    return (
                                        <SingleItem key={task.id} task={task} />
                                    )
                                })
                    }
                </div>
            </main>
        </div>
    )
}

export default All