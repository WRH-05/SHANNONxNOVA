import "../styles/components/Testimonials.css"
import PlaceholderImage from "./PlaceholderImage"

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "The Frostmourne Swirl froze my heart... and I loved it.",
      author: "Former Paladin",
    },
    {
      id: 2,
      text: "I thought I knew ice cream, but the Lich King showed me true power.",
      author: "Converted Mage",
    },
    {
      id: 3,
      text: "One bite, and I pledged my eternal loyalty to the Frozen Throne.",
      author: "Willing Subject",
    },
  ]

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">Testimonials from the Damned</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card frost-border">
              <div className="testimonial-content">
                <div className="quote-icon">❝</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <PlaceholderImage width={50} height={50} text={testimonial.author.charAt(0)} />
                  <span>{testimonial.author}</span>
                </div>
              </div>
              <div className="frost-glow"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="frost-mist"></div>
    </section>
  )
}

export default Testimonials

