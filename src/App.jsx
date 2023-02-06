import React, { useState } from 'react'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Sidebar from './components/Sidebar/Sidebar'


import { SidebarProvider } from './contexts/SidebarContext'

function App() {


  return (

    <SidebarProvider>
      <div className="app" className="dark">

        <MainContent />
        <Header />
        <Sidebar />



      </div>
    </SidebarProvider>
  )
}

export default App
