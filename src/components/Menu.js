import "./css/Menu.css"
import PlaceholderImage from "./PlaceholderImage"

function Menu() {
  const flavors = [
    {
      id: 1,
      name: "Frostmourne Swirl",
      description: "A chilling blend of dark chocolate and mint, so cold it will steal your soul.",
    },
    {
      id: 2,
      name: "Plagueberry Sorbet",
      description: "A tart and deadly burst of cursed berries, served with a side of despair.",
    },
    {
      id: 3,
      name: "Arctic Oblivion",
      description: "Vanilla ice cream infused with shards of caramelized ice, for those who dare to taste eternity.",
    },
    {
      id: 4,
      name: "Necrotic Nuts Delight",
      description: "A creamy peanut butter base with chunks of fudge and a hint of doom.",
    },
  ]

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">Menu of Frozen Domination</h2>
        </div>

        <div className="flavors-grid">
          {flavors.map((flavor) => (
            <div key={flavor.id} className="flavor-card frost-border">
              <div className="flavor-image-container">
                <PlaceholderImage width={300} height={200} text={flavor.name} />
                <div className="flavor-image-overlay"></div>
              </div>
              <div className="flavor-content">
                <h3>{flavor.name}</h3>
                <p>{flavor.description}</p>
                <button className="frost-button">Surrender to Taste</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="frost-mist"></div>
    </section>
  )
}

export default Menu

