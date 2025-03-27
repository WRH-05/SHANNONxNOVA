import "../styles/components/Containers.css";
import VanillaHand from "../assets/photos/vanillahand.png";
import WhiteHand from "../assets/photos/whitehand.png";
import PurpleHand from "../assets/photos/purplehand.png";
import PinkHand from "../assets/photos/pinkhand.png";
import BrownHand from "../assets/photos/brownhand.png";

function Containers() {
  const images = [VanillaHand, WhiteHand, PurpleHand, PinkHand, BrownHand];
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - e.currentTarget.getBoundingClientRect().left;
    scrollLeft = e.currentTarget.scrollLeft;
    e.currentTarget.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = e.currentTarget;
    const x = e.pageX - container.getBoundingClientRect().left;
    const walkX = x - startX;
    container.scrollLeft = scrollLeft - walkX;
  };

  const handleMouseUpOrLeave = (e) => {
    isDragging = false;
    e.currentTarget.style.cursor = "grab";
  };

  const handleScroll = (e) => {
    const container = e.currentTarget;
    const maxScrollLeft = container.scrollWidth / 2;
    if (container.scrollLeft <= 0) {
      container.scrollLeft = maxScrollLeft - 1;
    } else if (container.scrollLeft >= maxScrollLeft) {
      container.scrollLeft = 1;
    }
  };

  return (
    <section className="containers-section">
      <h2 className="section-title">Frozen Domination</h2>
      <div
        className="scrolling-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onScroll={handleScroll}
      >
        <div className="scrolling-content">
          {[...images, ...images].map((image, index) => ( // Duplicate images for seamless scrolling
            <div key={index} className="image-container">
              <img src={image} alt={`Hand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Containers;
