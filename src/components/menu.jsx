import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/menu.css'; // Corrected path to the CSS file
import SorbetImage from '../assets/photos/sorbet.png'; // Import the main image
import PurpleSkullImage from '../assets/photos/purpleskull.png'; // Import the overlay image

const Menu = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/flavors');
    };

    return (
        <section id="menu-section" className="menu-section"> {/* Ensure the id is set here */}
            <div className="menu-image-container">
                <img 
                    src={SorbetImage} // Use the imported image
                    alt="Sorbet" 
                    className="menu-image" 
                    onClick={handleClick} 
                />
                <img 
                    src={PurpleSkullImage} // Overlay image
                    alt="Purple Skull" 
                    className="overlay-image" 
                />
            </div>
        </section>
    );
};

export default Menu;
