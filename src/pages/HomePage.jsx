import "./HomePage.css"
import CallToAction from "../components/CallToAction"
import Gallery from "../components/Gallery"
import LoyaltyProgram from "../components/LoyaltyProgram"
import Testimonials from "../components/Testimonials"
import Promise from "../components/Promise"

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">THE LICH KING'S VISION</h1>
          <p className="hero-subtitle">THIS IS NO ORDINARY ICE-CREAM IT IS A CONQUEST OF TASTE, FORGED IN THE COLDEST DEPTHS OF NORTHREND</p>
          <button className="frost-button">Taste the Chill</button>
        </div>
        <div className="frost-mist"></div>
        <div className="icicles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="icicle"
              style={{
                left: `${i * 5 + Math.random() * 5}%`,
                height: `${30 + Math.random() * 70}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Flavors</h2>
          <div className="flavors-grid">
            <div className="flavor-card frost-border">
              <div className="flavor-content">
                <h3>Frostmourne Swirl</h3>
                <p>A chilling blend of dark chocolate and mint, so cold it will steal your soul.</p>
              </div>
            </div>
            <div className="flavor-card frost-border">
              <div className="flavor-content">
                <h3>Plagueberry Sorbet</h3>
                <p>A tart and deadly burst of cursed berries, served with a side of despair.</p>
              </div>
            </div>
            <div className="flavor-card frost-border">
              <div className="flavor-content">
                <h3>Arctic Oblivion</h3>
                <p>Vanilla ice cream infused with shards of caramelized ice, for those who dare to taste eternity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Gallery />
      <LoyaltyProgram />
      <Testimonials />
      <Promise />
    </div>
  )
}

export default HomePage