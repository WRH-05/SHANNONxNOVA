import "../styles/pages/HomePage.css"; 
import TransitionBand from "../components/TransitionBand";
import DescriptionSection from "../components/DescriptionSection";
import Containers from "../components/Containers"; // Ensure this import exists

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

      <TransitionBand />
      <DescriptionSection />
      <Containers /> {/* Ensure this component is rendered */}
    </div>
  );
}

export default HomePage;