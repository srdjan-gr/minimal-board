import React, { useState, useEffect, useContext } from 'react'
import ThemeContext from './contexts/ThemeContext';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { Route, RouterProvider, createBrowserRouter, useParams } from 'react-router-dom';


import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import All from './Pages/All';
import Login from './Pages/Login';


function App() {

  const { theme, setTheme } = useContext(ThemeContext);

  // New router V6.4
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Login />,
  //     errorElement: <ErrorPage error='nologin' />,
  //   },
  //   {
  //     path: "/Home",
  //     element: <Home />,
  //     errorElement: <ErrorPage error='notask' />,
  //   },
  //   {
  //     path: "All/:categoryName",
  //     element: <All />,
  //     errorElement: <ErrorPage error='notask' />
  //   },
  //   {
  //     path: '*',
  //     // element: <ErrorPage />,
  //     errorElement: <ErrorPage nopage />
  //   },
  // ])

  // <RouterProvider router={router} />
  return (
    <div className={`${theme === 'lightTheme' ? 'lightTheme' : 'darkTheme'} main`}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/All/:categoryName' element={<All />} />
          <Route path='*' element={<ErrorPage nopage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
