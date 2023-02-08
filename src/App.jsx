import React, { useState, useEffect, useContext } from 'react'
// import Header from './components/Header/Header'
// import HeaderMenu from './components/HeaderMenu/HeaderMenu';
// import Sidebar from './components/Sidebar/Sidebar'
import ThemeContext from './contexts/ThemeContext';


import { Route, RouterProvider, createBrowserRouter, useParams } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import All from './Pages/All';


function App() {

  const { theme, setTheme } = useContext(ThemeContext);
  // const [headerMenu, setHeaderMenu] = useState(false);

  // New router V6.4
  const router = createBrowserRouter([



    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "All/:categoryName",
      element: <All />,
      errorElement: <ErrorPage />
    },
  ])

  return (

    <div className={`${theme === 'darkTheme' ? 'darkTheme' : 'lightTheme'}`}>

      <RouterProvider router={router} />

    </div>

  )
}

export default App
