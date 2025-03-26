import { Link } from "react-router-dom"
import "../styles/components/Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-title">
            <h2>THE LICH KING</h2>
          </div>
          <div className="footer-subscribe">
            <p>SUBSCRIBE TO OUR SCROLLS OF ICE AND SHADOW FOR WHISPERS OF NEW FLAVORS AND FORBIDDEN DELIGHTS.</p>
            <p>ACCEPT THIS BOON—10% OFF YOUR FIRST TRIBUTE.</p>
            <p>OBEY, AND LET THE FROST CLAIM YOU.</p>
            <div className="subscribe-form">
              <input type="email" placeholder="E-MAIL ADDRESS" />
              <button type="submit" className="frost-button">
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-column">
            <h3>KINGDOM</h3>
            <ul>
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="#">DELIVERY</Link>
              </li>
              <li>
                <Link to="#">LOCALISATION</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>CATALOG</h3>
            <ul>
              <li>
                <Link to="#">ICECREAM FLAVOR</Link>
              </li>
              <li>
                <Link to="#">SPECIAL OFFER</Link>
              </li>
              <li>
                <Link to="#">GIFT CARD</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>TERMS AND POLICY</h3>
            <ul>
              <li>
                <Link to="#">TERMS OF SERVICE</Link>
              </li>
              <li>
                <Link to="#">PRIVACY POLICY</Link>
              </li>
              <li>
                <Link to="#">COOKIE POLICY</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>CONTACT</h3>
            <ul>
              <li>
                <Link to="/contact">THELICHKING@GMAIL.COM</Link>
              </li>
              <li>
                <Link to="/contact">0553444182</Link>
              </li>
              <li>
                <Link to="/contact">ALGERIA-ALGER CENTRE</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

