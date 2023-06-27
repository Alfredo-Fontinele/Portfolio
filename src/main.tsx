import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import { MotionProvider } from "./context/motion"
import { StatesProvider } from "./context/states"
import { GlobalStyle } from "./style/global"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <StatesProvider>
        <MotionProvider>
          <App />
        </MotionProvider>
      </StatesProvider>
    </BrowserRouter>
  </React.StrictMode>
)
