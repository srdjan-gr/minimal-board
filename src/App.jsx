import React, { useState, useEffect, useContext } from 'react'
import ThemeContext from './contexts/ThemeContext';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { Route, RouterProvider, createBrowserRouter, useParams } from 'react-router-dom';

import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import All from './Pages/All';
import LoginPage from './Pages/LoginPage';
import Loading from './Pages/Loading';


function App() {

  const { theme, setTheme } = useContext(ThemeContext);


  return (
    <div className={`${theme === 'lightTheme' ? 'lightTheme' : 'darkTheme'} main`}>
      <Router>
        <Routes>
          <Route exact path='/' element={<LoginPage />} />
          <Route path='/loading' element={<Loading />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/All/:categoryName' element={<All />} />
          <Route path='*' element={<ErrorPage nopage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
