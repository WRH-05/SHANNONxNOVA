import "../styles/components/CallToAction.css"

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content frost-border">
          <h2>Taste the Power of the Frozen Throne</h2>
          <p>Order now and embrace the cold. Resistance is futile—indulgence is eternal.</p>
          <div className="cta-buttons">
            <button className="frost-button primary">Order Now</button>
            <button className="frost-button secondary">View Menu</button>
          </div>

          <div className="frost-ornaments">
            <div className="frost-ornament left"></div>
            <div className="frost-ornament right"></div>
          </div>
        </div>
      </div>

      <div className="frost-mist"></div>
    </section>
  )
}

export default CallToAction

