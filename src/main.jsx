import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Recruiter from './pages/Recruiter'
import Technical from './pages/Technical'
import Interviewer from './pages/Interviewer'
import Learner from './pages/Learner'
import Curious from './pages/Curious'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/interviewer" element={<Interviewer />} />
        <Route path="/learner" element={<Learner />} />
        <Route path="/curious" element={<Curious />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
