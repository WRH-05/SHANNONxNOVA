"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/components/Navbar.css" // Corrected path

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <Link to="/" className="logo-container">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-4KvT9GmpblxgrYA8Y3ycgMRxGCMRrJ.png"
            alt="The Frozen Throne of Flavor"
            className="logo"
          />
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register" className="register-btn">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

