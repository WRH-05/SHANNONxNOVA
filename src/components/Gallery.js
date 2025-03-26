"use client"

import { useState } from "react"
import "./css/Gallery.css"
import PlaceholderImage from "./PlaceholderImage"

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { id: 1, title: "Frostmourne Swirl Cone" },
    { id: 2, title: "Plagueberry Sundae" },
    { id: 3, title: "Arctic Oblivion Bowl" },
    { id: 4, title: "Necrotic Nuts Milkshake" },
    { id: 5, title: "Frozen Throne Special" },
    { id: 6, title: "Death Knight Delight" },
  ]

  const openModal = (image) => setSelectedImage(image)
  const closeModal = () => setSelectedImage(null)

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">Gallery of Frozen Delights</h2>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item frost-border" onClick={() => openModal(image)}>
              <PlaceholderImage width={300} height={250} text={image.title} />
              <div className="gallery-item-overlay">
                <h3>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content frost-border" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <PlaceholderImage width={400} height={300} text={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
          </div>
        </div>
      )}

      <div className="frost-mist"></div>
    </section>
  )
}

export default Gallery

