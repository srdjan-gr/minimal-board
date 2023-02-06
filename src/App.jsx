import React, { useState, useEffect, useContext } from 'react'
import Header from './components/Header/Header'
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import MainContent from './components/MainContent/MainContent'
import Sidebar from './components/Sidebar/Sidebar'

import ThemeContext from './contexts/ThemeContext';


function App() {

  const { theme, setTheme } = useContext(ThemeContext);

  const [headerMenu, setHeaderMenu] = useState(false);

  return (

    <div className={`${theme === 'darkTheme' ? 'darkTheme' : 'lightTheme'}`}>

      <MainContent />
      <Header headerMenu={headerMenu} setHeaderMenu={setHeaderMenu} />
      <HeaderMenu headerMenu={headerMenu} />
      <Sidebar />

    </div>

  )
}

export default App
