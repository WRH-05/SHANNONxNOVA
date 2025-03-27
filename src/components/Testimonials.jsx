"use client"

import { useEffect, useState } from "react"
import "../styles/components/Testimonials.css" // Corrected path

// Custom avatar components to match the design
const PrettyCoolAvatar = () => (
  <div className="custom-avatar prettycool-avatar">
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="20" r="15" fill="#aee4ff" />
      <circle cx="18" cy="15" r="3" fill="#1c1c1e" />
      <circle cx="32" cy="15" r="3" fill="#1c1c1e" />
      <path d="M18 28 Q25 35 32 28" stroke="#1c1c1e" strokeWidth="2" fill="none" />
    </svg>
  </div>
)

const SimonloAvatar = () => (
  <div className="custom-avatar simonlo-avatar">
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 5 L40 20 L25 35 L10 20 Z" fill="#ff9cee" />
      <circle cx="20" cy="15" r="3" fill="#1c1c1e" />
      <circle cx="30" cy="15" r="3" fill="#1c1c1e" />
      <path d="M20 25 Q25 20 30 25" stroke="#1c1c1e" strokeWidth="2" fill="none" />
    </svg>
  </div>
)

const ChaoskingAvatar = () => (
  <div className="custom-avatar chaosking-avatar">
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="20" fill="#aaa" />
      <path d="M15 15 L20 10 L30 10 L35 15 L35 25 L25 35 L15 25 Z" fill="#666" />
      <circle cx="20" cy="20" r="2" fill="#1c1c1e" />
      <circle cx="30" cy="20" r="2" fill="#1c1c1e" />
      <path d="M20 28 Q25 25 30 28" stroke="#1c1c1e" strokeWidth="2" fill="none" />
    </svg>
  </div>
)

const VillainAvatar = () => (
  <div className="custom-avatar villain-avatar">
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="20" fill="#ffdd00" />
      <circle cx="18" cy="20" r="3" fill="#1c1c1e" />
      <circle cx="32" cy="20" r="3" fill="#1c1c1e" />
      <path d="M15 30 Q25 20 35 30" stroke="#1c1c1e" strokeWidth="2" fill="none" />
    </svg>
  </div>
)

const HellyAvatar = () => (
  <div className="custom-avatar helly-avatar">
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10 L40 10 L40 40 L10 40 Z" fill="#8c65d3" />
      <circle cx="20" cy="20" r="3" fill="#1c1c1e" />
      <circle cx="30" cy="20" r="3" fill="#1c1c1e" />
      <path d="M15 30 Q25 35 35 30" stroke="#1c1c1e" strokeWidth="2" fill="none" />
    </svg>
  </div>
)

const testimonials = [
  {
    id: 1,
    username: "PRETTYCOOL",
    avatar: <PrettyCoolAvatar />,
    text: "THE FROSTMOURNE SWIRL FROZE MY HEART .... AND I LOVED IT!",
  },
  {
    id: 2,
    username: "SIMONLO",
    avatar: <SimonloAvatar />,
    text: "I THOUGHT I KNEW ICE CREAM, BUT THE LIC KING SHOWED ME TRUE POWER",
  },
  {
    id: 3,
    username: "CHAOSKING",
    avatar: <ChaoskingAvatar />,
    text: "ONE BITE, AND I PLEDGED MY ETERNAL LOYALTY TO THE FROZEN THRONE",
  },
  {
    id: 4,
    username: "VILLAIN4LIFE",
    avatar: <VillainAvatar />,
    text: "THEY LIVED UP TO THE NAME- I MAY NEVER FEEL WARMTH AGAIN, BUT IT WAS WORTH IT",
  },
  {
    id: 5,
    username: "HELLYFAM22",
    avatar: <HellyAvatar />,
    text: "I TOOK THE CHALLENGE AND I LOST. SEND HELP OR MORE ICE CREAM",
  },
]

function TestimonialsPage() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  return (
    <section className="testimonials-section">
      <div className={`testimonials-container ${fadeIn ? "fade-in" : ""}`}>
        <div className="testimonials-header">
          <h1>TESTIMONIALS FROM THE DAMNED</h1>
          <p className="testimonials-subtitle">THOSE WHO HAVE TESTED MY CREATION ... AND LIVED TO TELL THE TALE</p>
        </div>

        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <div className="testimonial-avatar">
                {testimonial.avatar}
                <span className="testimonial-username">{testimonial.username}</span>
              </div>
              <div className="testimonial-content">
                <p>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsPage

