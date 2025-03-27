import React, { useState } from "react";
import "./UnifiedCatalogue.css";

const items = [
  {
    src: require("../assets/photos/brownhand.png"),
    name: "Frostmourne Swirl",
    description: "A chilling blend of dark chocolate and mint, so cold it will steal your soul.",
    price: "$5.99",
    featured: false,
  },
  {
    src: require("../assets/photos/purplehand.png"),
    name: "Plagueberry Sorbet",
    description: "A tart and deadly burst of cursed berries, served with a side of despair.",
    price: "$4.99",
    featured: true,
  },
  {
    src: require("../assets/photos/yellowhand.png"),
    name: "Arctic Oblivion",
    description: "Vanilla ice cream infused with shards of caramelized ice, for those who dare to taste eternity.",
    price: "$6.99",
    featured: false,
  },
  {
    src: require("../assets/photos/skull.png"),
    name: "Frozen Skull Delight",
    description: "A hauntingly delicious vanilla and strawberry swirl.",
    price: "$7.49",
    featured: true,
  },
];

const UnifiedCatalogue = () => {
  const [purchases, setPurchases] = useState(0); // Track the number of purchases
  const [showCelebration, setShowCelebration] = useState(false); // Track if celebration effect should show

  const handleBuyNowClick = () => {
    setPurchases((prev) => {
      const newCount = prev + 1;

      // Trigger celebration effect if milestone is reached
      if (newCount === 5) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 3000); // Hide celebration after 3 seconds
        return 0; // Reset purchases after milestone
      }

      return newCount;
    });
  };

  return (
    <section className="unified-catalogue">
      <div className="container">
        <h2 className="section-title">Frosted Delight's of the Frozen Horde</h2>

        {/* Purchase Meter */}
        <div className="purchase-meter">
          <p>
            Buy 5, Get 1 Free! Progress: {purchases}/5
          </p>
          <div className="meter">
            <div
              className="meter-fill"
              style={{ width: `${(purchases / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Celebration Effect */}
        {showCelebration && (
          <div className="celebration">
            ❄️ The Lich King bestows upon you a frozen boon! ❄️
            <p>Enjoy your free icy creation, loyal subject!</p>
          </div>
        )}

        <div className="catalogue-grid">
          {items.map((item, index) => (
            <div key={index} className={`catalogue-item ${item.featured ? "featured" : ""}`}>
              <img src={item.src} alt={item.name} className="catalogue-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">{item.price}</p>
                {item.featured && <span className="featured-badge">Featured</span>}
                <button className="buy-now-button" onClick={handleBuyNowClick}>
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnifiedCatalogue;