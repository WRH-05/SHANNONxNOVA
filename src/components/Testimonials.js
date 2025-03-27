import "../styles/components/Testimonials.css";

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
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-overlay"></div>
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">What Our Loyal Subjects Say</h2>
          <p className="section-subtitle">
            Discover why the Frozen Throne is the ultimate destination for ice cream lovers.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          ))}
        </div>

        <div className="cta-container">
          <button className="frost-button">Join the Frozen Throne</button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

