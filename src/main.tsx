import { StrictMode } from 'react'
//import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter basename='/Portfolio'>
     
    <App />
    </BrowserRouter>
  </StrictMode>,
)
