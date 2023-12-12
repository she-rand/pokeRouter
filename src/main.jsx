import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PokeContextProvider from './context/PokeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PokeContextProvider>
    
  </React.StrictMode>,
)
