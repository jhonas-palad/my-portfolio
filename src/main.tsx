import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import DarkmodeProvider from './context/darkModeProvider.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DarkmodeProvider>
      <App />
    </DarkmodeProvider>
  </React.StrictMode>,
)
