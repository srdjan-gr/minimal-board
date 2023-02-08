import React, { createContext, useState, useEffect } from 'react'
import api from '../api/api'

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {

    const [categories, setCategories] = useState([
        // {
        //     id: 1,
        //     kategorija_ime_EN: 'Personal',
        // },
        // {
        //     id: 2,
        //     kategorija_ime_EN: 'Busines',
        // },
        // {
        //     id: 3,
        //     kategorija_ime_EN: 'Personal',
        // },
        // {
        //     id: 4,
        //     kategorija_ime_EN: 'Busines',
        // },
        // {
        //     id: 5,
        //     kategorija_ime_EN: 'Personal',
        // },
        // {
        //     id: 6,
        //     kategorija_ime_EN: 'Busines',
        // },
        // {
        //     id: 7,
        //     kategorija_ime_EN: 'Personal',
        // },
        // {
        //     id: 8,
        //     kategorija_ime_EN: 'Busines',
        // },
    ]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        api({
            method: 'post',
            url: 'category.php?fun=read',
        })
            .then((response) => {
                setCategories(response.data);
            });
    }, [])


    return (
        <CategoriesContext.Provider value={{ categories, setCategories, isLoading }}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesContext;