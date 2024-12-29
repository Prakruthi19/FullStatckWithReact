import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ToastContainer} from 'react-toastify';
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
  <App/>
  <ToastContainer/>
  </div>
    
)
