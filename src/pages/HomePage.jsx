import "../styles/pages/HomePage.css"; 
import TransitionBand from "../components/TransitionBand";
import DescriptionSection from "../components/DescriptionSection";
import Containers from "../components/Containers"; 
import Menu from "../components/menu"; 
import Loyalty from "../components/Loyalty"; 
import Testimonials from "../components/Testimonials"; // Import Testimonials component

function HomePage() {
  const scrollToMenu = () => {
    const menuSection = document.querySelector("#menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Menu section not found. Ensure the 'id' is correctly set.");
    }
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">THE LICH KING'S VISION</h1>
          <p className="hero-subtitle">THIS IS NO ORDINARY ICE-CREAM IT IS A CONQUEST OF TASTE, FORGED IN THE COLDEST DEPTHS OF NORTHREND</p>
          <button className="frost-button" onClick={scrollToMenu}>Taste the Chill</button>
        </div>
        <div className="frost-mist"></div>
      </section>

      <TransitionBand />
      <DescriptionSection />
      <Containers />
      <Menu id="menu-section" />
      <Loyalty />
      <Testimonials /> {/* Add Testimonials section */}
    </div>
  );
}

export default HomePage;