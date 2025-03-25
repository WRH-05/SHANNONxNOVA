import "./LoyaltyProgram.css"

function LoyaltyProgram() {
  const rewards = [
    {
      id: 1,
      level: "Acolyte",
      points: "0-100",
      benefits: ["Free topping on your birthday", "5% off every 5th purchase"],
    },
    {
      id: 2,
      level: "Death Knight",
      points: "101-500",
      benefits: ["Free scoop monthly", "Access to limited edition flavors", "10% off every purchase"],
    },
    {
      id: 3,
      level: "Lich Lord",
      points: "501+",
      benefits: [
        "Free sundae monthly",
        "Exclusive tasting events",
        "15% off every purchase",
        "Chance to sit upon the Frozen Throne (figuratively)",
      ],
    },
  ]

  return (
    <section id="loyalty" className="loyalty-section">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">The Frostmourne Loyalty Program</h2>
        </div>

        <div className="loyalty-content">
          <div className="loyalty-intro frost-border">
            <h3>Join the Ranks of the Frozen</h3>
            <p>
              Join the Frostmourne Loyalty Program and earn points with every purchase. Unlock rewards like free
              toppings, exclusive flavors, and a chance to sit upon the Frozen Throne (figuratively).
            </p>
            <button className="frost-button">Pledge Your Loyalty</button>
          </div>

          <div className="rewards-grid">
            {rewards.map((reward) => (
              <div key={reward.id} className="reward-card frost-border">
                <div className="reward-header">
                  <h3>{reward.level}</h3>
                  <span className="points">{reward.points} points</span>
                </div>
                <ul className="benefits-list">
                  {reward.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="frost-mist"></div>
    </section>
  )
}

export default LoyaltyProgram

