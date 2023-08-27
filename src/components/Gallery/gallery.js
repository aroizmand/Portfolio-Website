import React, { useState, useEffect } from "react";
import "./gallery.css";
import AnimatedGalleryImage from "../AnimatedGalleryImage/animatedgal";

const TOUCH_THRESHOLD = 50;

function Gallery({ selectedCategory }) {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [startX, setStartX] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const [copyrightMessage, setCopyrightMessage] = useState({
    show: false,
    x: 0,
    y: 0,
  });

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  let timeoutId;

  const handleRightClick = (e) => {
    e.preventDefault();
    setCopyrightMessage({
      show: true,
      x: e.clientX,
      y: e.clientY,
    });

    timeoutId = setTimeout(hideMessage, 1500);
  };

  const hideMessage = () => {
    setCopyrightMessage({ show: false, x: 0, y: 0 });
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
  };

  const handleTouchMove = (e) => {
    if (isNavigating) return;

    const touch = e.touches[0];
    const deltaX = startX - touch.clientX;

    if (deltaX > TOUCH_THRESHOLD) {
      handleNext();
    } else if (deltaX < -TOUCH_THRESHOLD) {
      handlePrevious();
    }
  };

  const handleTouchEnd = () => {
    setStartX(null);
  };

  const handleNext = () => {
    const nextIndex = (selectedImageIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setSelectedImageIndex(nextIndex);
    setIsNavigating(true);
    setTimeout(() => setIsNavigating(false), 300);
  };

  const handlePrevious = () => {
    const prevIndex = (selectedImageIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setSelectedImageIndex(prevIndex);
    setIsNavigating(true);
    setTimeout(() => setIsNavigating(false), 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setSelectedImage(null);
    }
  };

  const fetchImages = (category) => {
    const baseUrl = `http://alexanderroizman.com/php/get-images.php`;
    const url = category ? `${baseUrl}?category=${category}` : baseUrl;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setImages(data));
  };

  useEffect(() => {
    fetchImages(selectedCategory === "All" ? "" : selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="gallery">
      <div className="image-grid">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="image-item"
            onClick={() => handleImageClick(image, index)}
          >
            <AnimatedGalleryImage
              src={image.imagepath}
              alt={image.title}
              loading="lazy"
              onContextMenu={handleRightClick}
            />
            <h3>{image.title}</h3>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <button className="arrow arrow-left" onClick={handlePrevious}>
            &lt;
          </button>
          <div
            className="modal-content"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="modal-image-container">
              <AnimatedGalleryImage
                src={selectedImage.imagepath}
                alt={selectedImage.title}
                className="modal-image"
                loading="lazy"
                onContextMenu={handleRightClick}
              />
            </div>
            <h3 className="modal-title">{selectedImage.title}</h3>
            <p className="modal-description">{selectedImage.description}</p>
          </div>
          <button className="arrow arrow-right" onClick={handleNext}>
            &gt;
          </button>
          <button className="arrow-left-lower" onClick={handlePrevious}>
            &lt;
          </button>
          <button className="arrow-right-lower" onClick={handleNext}>
            &gt;
          </button>
        </div>
      )}
      {copyrightMessage.show && (
        <div
          style={{
            position: "fixed",
            top: `${copyrightMessage.y}px`,
            left: `${copyrightMessage.x}px`,
            background: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            zIndex: 1000,
          }}
        >
          Download not allowed. To get the picture send me a message!
        </div>
      )}
    </div>
  );
}

export default Gallery;
