import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Table from './pages/Table'
import Quiz from './pages/Qiuz'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Table" element={<Table />} />
      <Route path="/Quiz" element={<Quiz />} />
    </Routes>
  </BrowserRouter>
)
