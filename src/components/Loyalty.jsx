import "../styles/components/Loyalty.css";
import VanillaHandInvisible from "../assets/photos/vanillahandinvisible.png";
import { useNavigate } from "react-router-dom";

function Loyalty() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <section className="loyalty-section">
      <div className="loyalty-content">
        <div className="loyalty-image">
          <img src={VanillaHandInvisible} alt="Vanilla Hand Invisible" />
        </div>
        <div className="loyalty-text">
          <p>
            Join the Frostmourne Loyalty Program and earn points with every purchase. Unlock rewards like free toppings, exclusive flavors, and a chance to sit upon the Frozen Throne. Your destiny awaits. Will you answer the call of the cold?
          </p>
          <button className="register-button" onClick={handleRegisterClick}>
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Loyalty;
