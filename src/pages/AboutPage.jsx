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
              Welcome to the Frozen Throne of Flavor, where every scoop is a masterpiece forged in the icy depths of Northrend. Our mission is to deliver an unparalleled ice cream experience that combines the chilling essence of frost with the warmth of indulgence.
            </p>
            <p>
              From the shimmering icicles to the frosty mist that greets you, every element of our design is crafted to immerse you in the Lich King's domain. Our flavors are as unique as the Frozen Throne itself, offering a taste of the extraordinary.
            </p>
          </div>

          <div className="about-section">
            <h2>The Lich King's Vision</h2>
            <blockquote>
              "You will kneel before my frozen creations. Each scoop is a masterpiece, crafted with the power of ice and death. Resistance is futile—indulgence is eternal."
            </blockquote>
            <p>- The Lich King, Master of Frost</p>
          </div>

          <div className="about-section">
            <h2>Our Commitment</h2>
            <p>
              We are dedicated to crafting ice cream that not only satisfies your taste buds but also transports you to a realm of frost and shadow. Our commitment to quality and creativity ensures that every bite is a journey into the extraordinary.
            </p>
            <p>
              Join our Frostmourne Loyalty Program to earn rewards, unlock exclusive flavors, and become a part of the Frozen Legion. Together, we shall conquer the realm of flavor.
            </p>
          </div>
        </div>
      </div>

      <div className="frost-mist"></div>
    </div>
  )
}

export default AboutPage

