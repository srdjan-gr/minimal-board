import React, { createContext, useState, useEffect } from 'react'
import api from '../api/api'
import categoriesFetchAll from '../utils/categoriesFetchAll';


const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {


    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [catId, setCatId] = useState(null);
    const [add, setAdd] = useState(false);


    useEffect(() => {
        categoriesFetchAll(setCategories, api)
    }, [add])


    return (
        <CategoriesContext.Provider
            value={{ categories, setCategories, isLoading, setCatId, catId, setAdd }}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesContext;