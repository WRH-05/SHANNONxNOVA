"use client"

import { useEffect, useState } from "react"
import "../styles/pages/AboutPage.css" // Corrected path

function AboutPage() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  return (
    <div className="about-page">
      <div className="about-background"></div>

      <div className="page-header">
        <h1>About The Frozen Throne</h1>
      </div>

      <div className={`container ${fadeIn ? "fade-in" : ""}`}>
        <div className="about-content frost-border">
          <div className="about-section">
            <h2>Our Frozen Legacy</h2>
            <p>
              The website shall be a frozen wasteland of beauty and terror. Our domain is a realm of icy blues, bone
              whites, and shadowy blacks. The design evokes the frozen throne itself, with frost-covered edges,
              shimmering icicles, and a faint mist rolling across the screen.
            </p>
            <p>
              Every visitor shall feel the chill of our domain. Our ice cream is crafted with the power of frost and
              shadow, designed to bring an otherworldly experience to your taste buds.
            </p>
          </div>

          <div className="about-section">
            <h2>The Lich King's Vision</h2>
            <p>
              "You will kneel before my frozen creations. Each scoop is a masterpiece, crafted with the power of ice and
              death. Resistance is futile—indulgence is eternal."
            </p>
            <p>- The Lich King, Master of Frost</p>
          </div>

          <div className="about-section">
            <h2>Our Commitment</h2>
            <p>
              We are committed to providing the most chilling ice cream experience in the realm. Our flavors are crafted
              with precision and dark magic, ensuring that each bite sends shivers down your spine.
            </p>
            <p>
              Join our Frostmourne Loyalty Program and earn points with every purchase. Unlock rewards like free
              toppings, exclusive flavors, and a chance to sit upon the Frozen Throne (figuratively).
            </p>
          </div>
        </div>
      </div>

      <div className="frost-mist"></div>
      <div className="snowflakes">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AboutPage

