import React, { useState, useEffect, useContext } from 'react'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Sidebar from './components/Sidebar/Sidebar'

import ThemeContext from './contexts/ThemeContext';


function App() {

  const { theme, setTheme } = useContext(ThemeContext);


  return (

    <div className={`${theme === 'darkTheme' ? 'darkTheme' : 'lightTheme'}`}>

      <MainContent />
      <Header />
      <Sidebar />

    </div>

  )
}

export default App
