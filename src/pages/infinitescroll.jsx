// src/pages/InfiniteIceCreamScroll.jsx
import React from 'react';
import './infinitescroll/.css';

const images = [
  '/SHANNONxNOVA/src/assets/photos/sword.png',
  '/SHANNONxNOVA/src/assets/photos/swirl.png',
  '/SHANNONxNOVA/src/assets/photos/sorbet.png',
];

const InfiniteIceCreamScroll = () => {
  // Duplicate images for seamless scrolling
  const repeatedImages = [...images, ...images];

  return (
    <div className="infinite-scroll-container">
      <div className="infinite-scroll-content">
        {repeatedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Ice Cream ${index + 1}`}
            className="icecream-image"
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteIceCreamScroll;
