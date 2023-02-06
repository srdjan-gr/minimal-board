import { useState } from 'react'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Sidebar from './components/Sidebar/Sidebar'


function App() {


  return (


      <div className="app" className="dark">

        <MainContent />
        <Header />
        <Sidebar />



      </div>

  )
}

export default App
