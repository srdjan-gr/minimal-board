import React, { useContext } from 'react'
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';

import SidebarContext from '../contexts/SidebarContext';

const ErrorPage = () => {
    const { sidebar } = useContext(SidebarContext)
    return (
        <main className={`${sidebar === true ? 'toggleMainContent' : ''} background text border-left`}>
            <ErrorComponent />

        </main>
    )
}

export default ErrorPage