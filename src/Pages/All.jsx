import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';

import Header from '../components/Header/Header'
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import Sidebar from '../components/Sidebar/Sidebar'
import SingleItem from '../components/SingleItem/SingleItem';

import SidebarContext from '../contexts/SidebarContext';
import CategoriesContext from '../contexts/CategoriesContext';


const All = () => {
    const { categories, setCategories, isLoading } = useContext(CategoriesContext);

    let categoryid = useParams();

    const { sidebar } = useContext(SidebarContext)
    const [headerMenu, setHeaderMenu] = useState(false);

    return (
        <div>
            <Header headerMenu={headerMenu} setHeaderMenu={setHeaderMenu} />
            <HeaderMenu headerMenu={headerMenu} />
            <Sidebar />


            <main className={`${sidebar === true ? 'toggleMainContent' : ''} background text border-left`}>

                <div className="grid__container">
                    {
                        categories.map((cat, idx) => {

                            categoryid.categoryid == cat.id ?
                                (
                                    <SingleItem key={cat.id} cat={cat} />
                                ) : ''
                        })
                    }
                </div>
            </main>
        </div>
    )
}

export default All