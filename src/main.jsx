import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './sass/main.css'

import { ThemeProvider } from './contexts/ThemeContext';
import { SidebarProvider } from './contexts/SidebarContext';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { TasksProvider } from './contexts/TasksContext';
import { OptionsMenuProvider } from './contexts/OptionsMenuContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <ThemeProvider>
    <SidebarProvider>
      <OptionsMenuProvider>
        <CategoriesProvider>
          <TasksProvider >

            <App />

          </TasksProvider>
        </CategoriesProvider>
      </OptionsMenuProvider>
    </SidebarProvider>
  </ThemeProvider>

  // </React.StrictMode>,
)
