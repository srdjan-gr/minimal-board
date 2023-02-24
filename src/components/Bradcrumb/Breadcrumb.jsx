import React, { useContext } from 'react'
import { BiChevronRight } from "react-icons/bi";
import { useParams, NavLink, useLocation } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";

import SidebarContext from '../../contexts/SidebarContext';

const Breadcrumb = () => {

    const { sidebar } = useContext(SidebarContext)

    const location = useLocation();

    let { categoryName } = useParams();

    const DynamicCategoryName = ({ match }) => (
        <span>{categoryName[match.params.categoryName]}</span>
    );

    const routes = [
        { path: "/home", breadcrumb: "/home" },
        { path: "/:categoryName", breadcrumb: DynamicCategoryName },
    ];

    const breadcrumbs = useBreadcrumbs(routes);


    return (
        <section className={`${sidebar === true ? 'toggleBreadcrumb' : ''} breadcrumb background-second text border-left`} >

            {breadcrumbs.map(({ match, breadcrumb }) => (
                <NavLink
                    className={`${match.pathname === location.pathname ? "breadcrumbActive" : "text"}`}
                    key={match.pathname}
                    to={match.pathname}>

                    {breadcrumb}
                </NavLink>
            ))}
        </section>
    )
}

export default Breadcrumb