import React, { useEffect, useState, useRef } from 'react';
import './separation-band.css';

const TransitionBand = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const imageRefs = useRef([]);
  const randomImages = useRef([]);

  const totalImages = 8;

  // Generate random images only once
  if (randomImages.current.length === 0) {
    const images = [
      require('../assets/photos/skull.png'),
      require('../assets/photos/pinkhand.png'),
      require('../assets/photos/purplehand.png'),
      require('../assets/photos/brownhand.png'),
    ];
    for (let i = 0; i < totalImages; i++) {
      const randIndex = Math.floor(Math.random() * images.length);
      randomImages.current.push(images[randIndex]);
    }
  }

  const fixedPositions = [
    { left: 5, top: 10 },
    { left: 25, top: 20 },
    { left: 50, top: 5 },
    { left: 75, top: 15 },
    { left: 10, top: 60 },
    { left: 35, top: 70 },
    { left: 60, top: 50 },
    { left: 85, top: 65 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => parseInt(entry.target.dataset.index, 10));

        setVisibleIndexes(visible); // Directly set visible indexes
      },
      { threshold: 0.1 } // Lower threshold for better visibility detection
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="transition-band">
      <div className="band-content">
        <h2>This is No Ordinary Ice Cream</h2>
        <p>Bow before the Frozen Throne of Flavor</p>
        <p>Taste the icy grip of perfection</p>
      </div>

      {randomImages.current.map((src, index) => {
        const { left, top } = fixedPositions[index];
        const isVisible = visibleIndexes.includes(index);
        const randomSize = 60 + Math.random() * 40; // Random size between 60px and 100px
        return (
          <img
            key={index}
            src={src}
            alt="Skull Ice Cream"
            className={`band-icecream ${isVisible ? 'visible' : ''}`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
            }}
            data-index={index}
            ref={(el) => (imageRefs.current[index] = el)}
          />
        );
      })}
    </div>
  );
};

export default TransitionBand;
