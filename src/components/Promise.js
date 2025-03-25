import "./Promise.css"
import PlaceholderImage from "./PlaceholderImage"

function Promise() {
  return (
    <section className="promise-section">
      <div className="container">
        <div className="promise-content frost-border">
          <div className="lich-king-image">
            <PlaceholderImage width={200} height={300} text="The Lich King" />
          </div>
          <div className="promise-text">
            <h2>The Lich King's Promise</h2>
            <p className="quote">
              "You will kneel before my frozen creations. Each scoop is a masterpiece, crafted with the power of ice and
              death. Resistance is futile—indulgence is eternal."
            </p>
            <p className="signature">- The Lich King, Master of Frost</p>
          </div>
        </div>
      </div>

      {/* Animated snowflakes */}
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

      <div className="frost-mist"></div>
    </section>
  )
}

export default Promise

