import "../styles/components/TransitionBand.css";
import WhiteHand from "../assets/photos/whitehand.png";
import VanillaHand from "../assets/photos/vanillahand.png";
import PurpleHand from "../assets/photos/purplehand.png";
import PinkHand from "../assets/photos/pinkhand.png";
import Skull from "../assets/photos/skull.png";
import BrownHand from "../assets/photos/brownhand.png";

function TransitionBand() {
  const images = [
    { src: WhiteHand, alt: "White Hand", side: "left" },
    { src: VanillaHand, alt: "Vanilla Hand", side: "left" },
    { src: PurpleHand, alt: "Purple Hand", side: "left" },
    { src: PinkHand, alt: "Pink Hand", side: "left" },
    { src: Skull, alt: "Skull", side: "left" },
    { src: BrownHand, alt: "Brown Hand", side: "right" },
    { src: WhiteHand, alt: "White Hand", side: "right" },
    { src: VanillaHand, alt: "Vanilla Hand", side: "right" },
    { src: PurpleHand, alt: "Purple Hand", side: "right" },
    { src: PinkHand, alt: "Pink Hand", side: "right" },
  ];

  return (
    <div className="transition-band">
      <div className="catchphrase">
        <h1>Bow Before the Frozen Throne of Flavor</h1>
        <h1>Taste the Icy Grip of Perfection</h1>
      </div>
      <div className="floating-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`floating-image ${image.side}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TransitionBand;