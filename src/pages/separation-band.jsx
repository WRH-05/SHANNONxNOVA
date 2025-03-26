// TransitionBand.jsx
import React, { useEffect, useState, useMemo } from 'react';
import './separation-band.css';

const TransitionBand = () => {
  // Track scroll position if you want to shrink/fade images on scroll
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // List your ice cream skull images
  const images = [
    '/SHANNONxNOVA/src/assets/photos/oblivian.png',
    '/SHANNONxNOVA/src/assets/photos/pinkhand.png',
    '/SHANNONxNOVA/src/assets/photos/purplehand.png',
    "/SHANNONxNOVA/src/assets/photos/brownhand.png"
];

  // Decide how many images you want floating in the band
const totalImages = 8;

  // Randomly pick images from the list
  const randomImages = useMemo(() => {
    const arr = [];
    for (let i = 0; i < totalImages; i++) {
      const randIndex = Math.floor(Math.random() * images.length);
      arr.push(images[randIndex]);
    }
    return arr;
  }, [images, totalImages]);

  // Generate random positions within the band (0-90% left, 0-80% top, etc.)
  const imagePositions = useMemo(() => {
    return new Array(totalImages).fill(null).map(() => ({
      left: Math.random() * 90, // 0% - 90%
      top: Math.random() * 80,  // 0% - 80%
    }));
  }, [totalImages]);

  // If you want them to shrink/fade with scroll, define a maxScroll
  // so at scrollY=0 => scale=1, opacity=1, and at scrollY=400 => scale=0, opacity=0
  const maxScroll = 400;
  const scale = Math.max(1 - scrollY / maxScroll, 0);
  const opacity = Math.max(1 - scrollY / maxScroll, 0);

  return (
    <div className="transition-band">
      <div className="band-content">
        <h2>This is No Ordinary Ice Cream</h2>
        <p>Bow before the Frozen Throne of Flavor</p>
        <p>Taste the icy grip of perfection</p>
      </div>

      {randomImages.map((src, index) => {
        const { left, top } = imagePositions[index];
        return (
          <img
            key={index}
            src={src}
            alt="Skull Ice Cream"
            className="band-icecream"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              transform: `scale(${scale})`,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
};

export default TransitionBand;
