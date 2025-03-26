"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/pages/RegisterPage.css" // Corrected path
import group16 from "../assets/photos/group16.png"; // Import the image

function RegisterPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
    console.log("Form submitted:", formData)
    setShowSuccess(true)
  }

  const toggleForm = () => {
    setIsLogin(!isLogin)
  }

  if (showSuccess) {
    return (
      <div className="success-page">
        <div className="success-content">
          <div className="success-message">
            <img
              src={group16} // Keep the picture
              alt="Success"
              className="success-image"
            />
            <Link to="/" className="frost-button bubble-button">
              RETURN TO THE FROZEN THRONE
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="register-page">
      <div className="register-nav">
        <Link to="/" className="register-logo">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-4KvT9GmpblxgrYA8Y3ycgMRxGCMRrJ.png"
            alt="The Frozen Throne of Flavor"
          />
        </Link>
      </div>

      <div className={`register-container ${fadeIn ? "fade-in" : ""}`}>
        <div className="register-form-side frost-border">
          <div className="form-content">
            <h2>{isLogin ? "SIGN IN" : "JOIN THE FROZEN LEGION"}</h2>
            <p className="form-subtitle">You chose loyalty and grand things you shall receive</p>

            <form onSubmit={handleSubmit}>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="frost-input"
                />
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="frost-input"
                  />
                </div>
              )}

              <button type="submit" className="frost-button submit-btn">
                {isLogin ? "ENTER THE REALM" : "PLEDGE YOUR LOYALTY"}
              </button>

              <div className="google-signin">
                <button type="button" className="google-button">
                  <span className="google-icon">G</span>
                  CONTINUE WITH GOOGLE
                </button>
              </div>

              <div className="form-switch">
                <p>
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button type="button" onClick={toggleForm} className="switch-button">
                    {isLogin ? "Register" : "Sign In"}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="register-image-side">
          <div className="register-image-content">
            <h1>TASTE THE COLD</h1>
            <h2>EXCLUSIVELY AT THIS KINGDOM</h2>
          </div>
        </div>
      </div>

      <div className="frost-mist"></div>
      <div className="snowfall">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default RegisterPage

