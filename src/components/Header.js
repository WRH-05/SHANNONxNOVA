"use client"

import { useState, useEffect } from "react"
import "./Header.css"
import PlaceholderImage from "./PlaceholderImage"

function Header() {
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
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <div className="logo-container">
          <div className="logo">
            <PlaceholderImage width={50} height={50} text="Logo" />
          </div>
          <h1>The Frozen Throne of Flavor</h1>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#loyalty">Loyalty</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="hero">
        <div className="hero-content">
          <h2 className="tagline">Bow before the Frozen Throne of Flavor</h2>
          <p className="sub-tagline">Taste the icy grip of perfection</p>
          <button className="frost-button">Order Now</button>
        </div>

        {/* Icicles */}
        <div className="icicles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="icicle"
              style={{
                left: `${i * 5 + Math.random() * 5}%`,
                height: `${30 + Math.random() * 70}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="frost-mist"></div>
      </div>
    </header>
  )
}

export default Header

