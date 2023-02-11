import React, { createContext, useState, useEffect } from 'react'
import api from '../api/api'

const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {

    const [categories, setCategories] = useState([
        // {
        //     id: 1,
        //     kategorija_ime_EN: 'Personal',
        // },
    ]);

    // const [categories, setCategories] = useState({
    //     data: [],
    //     isLoading: false,
    //     catId: null,
    //     add: false
    // })

    const [isLoading, setIsLoading] = useState(false);
    const [catId, setCatId] = useState(null);
    const [add, setAdd] = useState(false);


    useEffect(() => {
        api({
            method: 'post',
            url: 'category.php?fun=read',
        })
            .then((response) => {
                setCategories(response.data);
            });
    }, [add])


    return (
        <CategoriesContext.Provider
            value={{ categories, setCategories, isLoading, setCatId, catId, setAdd }}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesContext;