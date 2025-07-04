import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
