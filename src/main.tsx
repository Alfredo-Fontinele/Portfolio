import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { StatesProvider } from './context/states'
import { GlobalStyle } from './style/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <StatesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StatesProvider>
  </React.StrictMode>
)
