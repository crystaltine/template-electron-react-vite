import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/general/index.css'
import './styles/general/fonts.css'
import './styles/general/generics.css'
import './styles/general/popup.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)