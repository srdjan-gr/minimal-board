import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './sass/main.css'

import { ThemeProvider } from './contexts/ThemeContext';
import { SidebarProvider } from './contexts/SidebarContext';
import { CategoriesProvider } from './contexts/CategoriesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <ThemeProvider>
    <SidebarProvider>
      <CategoriesProvider>

        <App />

      </CategoriesProvider>
    </SidebarProvider>
  </ThemeProvider>

  // </React.StrictMode>,
)
