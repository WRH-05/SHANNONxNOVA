"use client"

import { useState } from "react"
import "./RegisterPage.css"

function RegisterPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

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
    setShowSuccess(true)
  }

  const toggleForm = () => {
    setIsLogin(!isLogin)
  }

  if (showSuccess) {
    return (
      <div className="register-page">
        <div className="success-container frost-border">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group16-WiWJavjdaeX8ZSPZYEQdlHDKAtxLvr.png"
            alt="Registration Success"
            className="success-image"
          />
          <button className="frost-button" onClick={() => (window.location.href = "/")}>
            Return to the Frozen Throne
          </button>
        </div>
        <div className="frost-mist"></div>
      </div>
    )
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-image-side">
          <div className="register-overlay">
            <h2>You chose loyalty and grand things you shall receive</h2>
          </div>
        </div>
        <div className="register-form-side frost-border">
          <h2>{isLogin ? "Sign In" : "Join the Frozen Legion"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
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
                />
              </div>
            )}

            <button type="submit" className="frost-button">
              {isLogin ? "Sign In" : "Register"}
            </button>

            <div className="google-signin">
              <button type="button" className="google-button">
                <span className="google-icon">G</span>
                Continue with Google
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
      <div className="frost-mist"></div>
    </div>
  )
}

export default RegisterPage

