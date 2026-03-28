import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FAB from './components/FAB/FAB'
import Home from './pages/Home'
import AppointmentPage from './pages/AppointmentPage'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<AppointmentPage />} />
          </Routes>
        </main>
        <Footer />
        <FAB />
      </div>
    </Router>
  )
}

export default App
