import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import RegisterPage from "./pages/RegisterPage"
import Footer from "./components/Footer"

// Create a wrapper component to conditionally render the Navbar and Footer
function AppContent() {
  const location = useLocation()
  const isRegisterPage = location.pathname === "/register"

  return (
    <div className="app">
      {!isRegisterPage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      {!isRegisterPage && <Footer />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

