import React, { useContext } from 'react'
import { BiChevronRight } from "react-icons/bi";
import { useParams, NavLink, useLocation } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";

import SidebarContext from '../../contexts/SidebarContext';
import TasksContext from '../../contexts/TasksContext';

const Breadcrumb = () => {

    const { sidebar } = useContext(SidebarContext)
    const { tasks, setTasks, isLoading } = useContext(TasksContext);
    const location = useLocation();

    let { categoryName } = useParams();

    const DynamicCategoryName = ({ match }) => (
        <span>{categoryName[match.params.categoryName]}</span>
    );

    const routes = [
        { path: "/", breadcrumb: "" },
        { path: "/Home", breadcrumb: "Home/" },
        { path: "/:categoryName", breadcrumb: DynamicCategoryName },
    ];

    const breadcrumbs = useBreadcrumbs(routes);

    const resetroute = () => {

        routes.forEach(r => {
            if (r.path == '/Home') {
                setTasks([])
                // categoryName = null
            }
        });
    }


    return (
        <section className={`${sidebar === true ? 'toggleBreadcrumb' : ''} breadcrumb background-second text border-left border-bottom-diff`} >

            {breadcrumbs.map(({ match, breadcrumb }) => (
                <NavLink
                    className={`${match.pathname === location.pathname ? "breadcrumbActive" : "text"}`}
                    key={match.pathname}
                    to={match.pathname}
                    onClick={resetroute}>

                    {breadcrumb}
                </NavLink>
            ))}
        </section>
    )
}

export default Breadcrumb