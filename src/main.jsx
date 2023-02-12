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
import { HiddenMenuProvider } from './contexts/HiddenMenuContext';
import { ModalProvider } from './contexts/ModalContext'
import { SingleItemOptionsProvider } from './contexts/SingleItemOptionsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <ThemeProvider>
    <SidebarProvider>
      <OptionsMenuProvider>
        <HiddenMenuProvider>
          <ModalProvider>
            <CategoriesProvider>
              <SingleItemOptionsProvider>
                <TasksProvider >

                  <App />

                </TasksProvider>
              </SingleItemOptionsProvider>
            </CategoriesProvider>
          </ModalProvider>
        </HiddenMenuProvider>
      </OptionsMenuProvider>
    </SidebarProvider>
  </ThemeProvider>

  // </React.StrictMode>,
)
