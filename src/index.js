import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Table from './pages/Table'
import Quiz from './pages/Qiuz'
import { jsQuiz } from './pages/Questions'
import ContactUs from './pages/contact-us'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Table" element={<Table />} />
      <Route path="/Quiz" element={<Quiz questions={jsQuiz.questions} />} />
      <Route path="/contactUs" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
)
