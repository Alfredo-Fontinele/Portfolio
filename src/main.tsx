import { StatesProvider } from './context/states'
import { MotionProvider } from './context/motion'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './style/global'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <StatesProvider>
      <MotionProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MotionProvider>
    </StatesProvider>
  </React.StrictMode>
)
