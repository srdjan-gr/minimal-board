import React, { useState, useContext, useEffect } from 'react'
import { BiFilter, BiListOl } from "react-icons/bi";
import Breadcrumb from '../components/Bradcrumb/Breadcrumb';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import api from '../api/api'

import Header from '../components/Header/Header'
import HiddenMenu from '../components/HiddenMenu/HiddenMenu';
import Message from '../components/Message/Message';
import Modal from '../components/Modal/Modal';
import OptionsMenu from '../components/OptionsMenu/OptionsMenu'
import Sidebar from '../components/Sidebar/Sidebar'
import Filters from '../components/Filters/Filters';
import Loader from '../components/Loader/Loader';
import SingleItem from '../components/SingleItem/SingleItem';

import SidebarContext from '../contexts/SidebarContext';
import ErrorPage from './ErrorPage';
import categoriesFetchAll from '../utils/categoriesFetchAll';
import CategoriesContext from '../contexts/CategoriesContext';
import TasksContext from '../contexts/TasksContext';


const Home = () => {

    const navigate = useNavigate();
    const { sidebar } = useContext(SidebarContext)
    const { categories, setCategories } = useContext(CategoriesContext);
    const { tasks, setTasks, isLoading } = useContext(TasksContext);

    // let { categoryid } = useParams();

    // Session
    const mbsession = sessionStorage.getItem("mblog");


    useEffect(() => {
        // Loads uses boards on login
        setTimeout(() => {
            categoriesFetchAll(setCategories, api)
        }, 500)

        // Sets session duration. 
        // After that time sessio will expire and user will be loged out
        setTimeout(() => {
            if (mbsession) {
                sessionStorage.removeItem('mblog')
                navigate('/')
            }
        }, 900000);

    }, [mbsession])


    if (mbsession) {

        return (
            <div>
                <Message />
                <Modal />
                <HiddenMenu />
                <Header />
                <Breadcrumb />
                <OptionsMenu />
                <Sidebar />

                <main className={`${sidebar === true ? 'toggleMainContent' : ''} background text border-left`} >

                    {/*In the '' put all components that need to me on home page*/}
                    {
                        tasks.length == 0 ? '' :

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
                    }
                </main>
            </div>
        )

    } else {
        return (
            <ErrorPage nologin />
        )
    }
}

export default Home