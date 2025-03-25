import "./Footer.css"
import PlaceholderImage from "./PlaceholderImage"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <PlaceholderImage width={80} height={80} text="Logo" />
            <h3>The Frozen Throne of Flavor</h3>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Menu</h4>
              <ul>
                <li>
                  <a href="#menu">Ice Cream</a>
                </li>
                <li>
                  <a href="#menu">Sundaes</a>
                </li>
                <li>
                  <a href="#menu">Specials</a>
                </li>
                <li>
                  <a href="#menu">Toppings</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>About</h4>
              <ul>
                <li>
                  <a href="#about">Our Story</a>
                </li>
                <li>
                  <a href="#about">The Lich King</a>
                </li>
                <li>
                  <a href="#about">Locations</a>
                </li>
                <li>
                  <a href="#about">Careers</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#loyalty">Loyalty Program</a>
                </li>
                <li>
                  <a href="#social">Social Media</a>
                </li>
                <li>
                  <a href="#newsletter">Newsletter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} The Frozen Throne of Flavor. All rights reserved.
          </p>
          <p className="lich-king-quote">"All who visit shall kneel before the Frozen Throne of Flavor."</p>
        </div>
      </div>

      <div className="icicles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="icicle"
            style={{
              left: `${i * 7 + Math.random() * 5}%`,
              height: `${20 + Math.random() * 30}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </footer>
  )
}

export default Footer

