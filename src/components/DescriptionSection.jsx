import "../styles/components/DescriptionSection.css";
import Skull from "../assets/photos/skull.png";
import VanillaHand from "../assets/photos/table.png";

function DescriptionSection() {
  return (
    <section className="description-section">
      <div className="description-content">
        <div className="description-images">
          <img src={Skull} alt="Skull" className="description-image skull" />
          <img src={VanillaHand} alt="Vanilla Hand" className="description-image hand" />
        </div>
        <div className="description-text">
          <h1>Bow Before the Frozen Throne of Flavor</h1>
          <p>
            Within these icy walls, you will taste the chilling grip of perfection. Dare to indulge if you can withstand the cold.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DescriptionSection;
