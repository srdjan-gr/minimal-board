import React, { useState, useEffect, useContext } from 'react'
import { BiFilter, BiListOl } from "react-icons/bi";
import { useParams } from 'react-router-dom';


import Breadcrumb from '../components/Bradcrumb/Breadcrumb';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';
import Filters from '../components/Filters/Filters';
import Header from '../components/Header/Header'
import OptionsMenu from '../components/OptionsMenu/OptionsMenu'
import Loader from '../components/Loader/Loader';
import Sidebar from '../components/Sidebar/Sidebar'
import SingleItem from '../components/SingleItem/SingleItem';
import Message from '../components/Message/Message';


import SidebarContext from '../contexts/SidebarContext';
import TasksContext from '../contexts/TasksContext';
import Modal from '../components/Modal/Modal';
import HiddenMenu from '../components/HiddenMenu/HiddenMenu';
import jwt from 'jwt-decode'
import ErrorPage from './ErrorPage';

const All = () => {

    // Session
    const mbsession = sessionStorage.getItem("mblog");

    const { tasks, setTasks, isLoading } = useContext(TasksContext);
    const { sidebar } = useContext(SidebarContext)

    let { categoryid } = useParams();


    if (mbsession) {

        return (
            <div>
                <Message />
                <HiddenMenu />
                <Header />
                <Breadcrumb />
                <OptionsMenu />
                <Sidebar />
                <Modal />


                <main className={`${sidebar ? 'toggleMainContent' : ''} background text border-left`}>

                    <div className='main__all-container'>

                        {tasks.length > 0 ? <Filters /> : ''}

                        <div className="main__all-container-content">

                            <div className="filters__container-header border-bottom text-third">
                                <BiListOl className='icon-m2' />
                                <h2>Tasks</h2>
                                <h2 >( {tasks.length} )</h2>
                            </div>

                            <div className="grid__container">
                                {
                                    isLoading ? <Loader /> :
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
    } else {
        return (
            <ErrorPage nologin />
        )
    }
}

export default All