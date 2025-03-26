"use client"

import { useState, useEffect } from "react"
import "../styles/pages/ContactPage.css" // Corrected path

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData)
    alert("Your message has been received by the Lich King. Prepare for a frozen response.")
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <div className="contact-page">
      <div className="contact-background"></div>

      <div className="page-header">
        <h1>Contact The Frozen Throne</h1>
      </div>

      <div className={`container ${fadeIn ? "fade-in" : ""}`}>
        <div className="contact-content">
          <div className="contact-info frost-border">
            <h3>Approach with Caution</h3>
            <p className="warning">The Lich King is always watching.</p>

            <div className="info-item">
              <div className="icon location-icon">📍</div>
              <div>
                <h4>Frozen Throne Ice Cream Parlor</h4>
                <p>Icecrown Citadel, Northrend</p>
                <p>Open daily: 10am - 10pm</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon phone-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>(555) ICE-KING</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon email-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>lichking@frozenthrone.ice</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container frost-border">
            <h3>Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="frost-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="frost-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="frost-input"
                ></textarea>
              </div>

              <button type="submit" className="frost-button">
                Submit to the Frozen Throne
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="frost-mist"></div>
      <div className="icicles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="icicle"
            style={{
              left: `${i * 7 + Math.random() * 5}%`,
              height: `${20 + Math.random() * 30}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ContactPage

