// src/pages/InfiniteIceCreamScroll.jsx
import React, { useState } from 'react';
import './infinitescroll.css';

const images = [
  {
    src: require('../assets/photos/brownhand.png'),
    replacement: require('../assets/photos/swirl.png'), // Replacement for brownhand
    name: "Frostmourne Swirl",
    price: "$5.99",
  },
  {
    src: require('../assets/photos/purplehand.png'),
    replacement: require('../assets/photos/sorbet.png'), // Replacement for purplehand
    name: "Plagueberry Sorbet",
    price: "$4.99",
  },
  {
    src: require('../assets/photos/yellowhand.png'), // Replace pinkhand with yellowhand
    replacement: require('../assets/photos/oblivion.png'), // Replacement for yellowhand
    name: "Arctic Oblivion",
    price: "$6.99",
  },
];

const InfiniteIceCreamScroll = () => {
  const [expandedImage, setExpandedImage] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (image) => {
    setExpandedImage(image.replacement || image.src); // Show replacement if available, otherwise show original
  };

  const handleBuyNowClick = (item) => {
    setSelectedItem(item);
    alert(`You selected ${item.name} for purchase!`);
    // Here, you can redirect to a checkout page or open a modal for payment
  };

  const handleCloseClick = () => {
    setExpandedImage(null);
  };

  return (
    <div className="image-gallery-container">
      <div className="image-gallery-content">
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={image.src}
              alt={image.name}
              className="icecream-image"
              onClick={() => handleImageClick(image)}
            />
            <div className="image-details">
              <h3>{image.name}</h3>
              <p>{image.price}</p>
              <button
                className="buy-now-button"
                onClick={() => handleBuyNowClick(image)}
              >
                Buy Now
              </button>
            </div>
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
