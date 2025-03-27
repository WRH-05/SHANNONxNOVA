import React from 'react';
import './flavors.css';

const Flavors = () => {
    return (
        <section className="flavors-section">
            <img src="sorbet.png" alt="Sorbet" className="flavor-image" />
            <img src="swirl.png" alt="Swirl" className="flavor-image" />
            <img src="oblivion.png" alt="Oblivion" className="flavor-image" />
        </section>
    );
};

export default Flavors;
