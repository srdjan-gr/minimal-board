import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './sass/main.css'

import { ThemeProvider } from './contexts/ThemeContext';
import { MessageProvider } from './contexts/MessageContext'
import { SidebarProvider } from './contexts/SidebarContext';
import { BoardProvider } from './contexts/BoardContext'
import { OptionsMenuProvider } from './contexts/OptionsMenuContext';
import { HiddenMenuProvider } from './contexts/HiddenMenuContext';
import { ModalProvider } from './contexts/ModalContext'
import { CategoriesProvider } from './contexts/CategoriesContext';
import { SingleItemOptionsProvider } from './contexts/SingleItemOptionsContext'
import { TasksProvider } from './contexts/TasksContext';
import { TasksEditProvider } from './contexts/TasksEditContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <ThemeProvider>
    <MessageProvider  >
      <SidebarProvider>
        <BoardProvider>
          <OptionsMenuProvider>
            <HiddenMenuProvider>
              <ModalProvider>
                <CategoriesProvider>
                  <SingleItemOptionsProvider>
                    <TasksProvider >
                      <TasksEditProvider>

                        <App />

                      </TasksEditProvider>
                    </TasksProvider>
                  </SingleItemOptionsProvider>
                </CategoriesProvider>
              </ModalProvider>
            </HiddenMenuProvider>
          </OptionsMenuProvider>
        </BoardProvider>
      </SidebarProvider>
    </MessageProvider>
  </ThemeProvider>

  // </React.StrictMode>,
)
