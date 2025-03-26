// src/pages/InfiniteIceCreamScroll.jsx
import React, { useState } from 'react';
import './infinitescroll.css';

const images = [
  '/src/assets/photos/brownhand.png',
  '/src/assets/photos/purplehand.png',
  '/src/assets/photos/pinkhand.png',
];

const InfiniteIceCreamScroll = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (src) => {
    setExpandedImage(src);
  };

  const handleCloseClick = () => {
    setExpandedImage(null);
  };

  return (
    <div className="image-gallery-container">
      <div className="image-gallery-content">
        {images.map((src, index) => (
          <div key={index} className="image-wrapper" onClick={() => handleImageClick(src)}>
            <img
              src={src}
              alt={`Ice Cream ${index + 1}`}
              className="icecream-image"
            />
          </div>
        ))}
      </div>
      {expandedImage && (
        <div className="expanded-image-container" onClick={handleCloseClick}>
          <img src={expandedImage} alt="Expanded Ice Cream" className="expanded-image" />
        </div>
      )}
    </div>
  );
};

export default InfiniteIceCreamScroll;
