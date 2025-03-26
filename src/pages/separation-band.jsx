import React, { useEffect, useState, useMemo } from 'react';
import './separation-band.css';

const TransitionBand = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalImages = 8;

  const randomImages = useMemo(() => {
    const images = [
      '/assets/photos/oblivian.png',
      '/assets/photos/pinkhand.png',
      '/assets/photos/purplehand.png',
      '/assets/photos/brownhand.png'
    ];
    const arr = [];
    for (let i = 0; i < totalImages; i++) {
      const randIndex = Math.floor(Math.random() * images.length);
      arr.push(images[randIndex]);
    }
    return arr;
  }, [totalImages]);

  const imagePositions = useMemo(() => {
    return new Array(totalImages).fill(null).map(() => ({
      left: Math.random() * 90,
      top: Math.random() * 80,
    }));
  }, [totalImages]);

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
