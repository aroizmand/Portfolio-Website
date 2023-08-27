import React, { useState, useEffect } from "react";
import Owlets from "../../photos/owlets.jpg";
import Puma from "../../photos/puma.jpg";
import Horse from "../../photos/horse_england_1.jpg";
import Eagle from "../../photos/eagle_1.jpg";
import Fox from "../../photos/fox.jpg";
import Sheep from "../../photos/bgsheep.jpg";
import { useNavigate } from "react-router-dom";
import CanvasImage from "../CanvasImage/canvasImage";

import "./photos.css";

const Photos = () => {
  const photos = [Eagle, Horse, Owlets, Puma, Fox, Sheep];
  const angleStep = 360 / photos.length;
  const carouselRadius = "var(--carousel-radius)";
  const [rotation, setRotation] = useState(0);
  const [frontCardIndex, setFrontCardIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [copyrightMessage, setCopyrightMessage] = useState({
    show: false,
    x: 0,
    y: 0,
  });

  const handleRotate = (direction) => {
    const newRotation = rotation + angleStep * direction;
    setRotation(newRotation);

    const newFrontCardIndex =
      (photos.length - direction + frontCardIndex) % photos.length;
    setFrontCardIndex(newFrontCardIndex);
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
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 100) {
      handleRotate(-1);
    } else if (touchEndX - touchStartX > 100) {
      handleRotate(1);
    }

    setTouchStartX(0);
    setTouchEndX(0);
  };

  const navigate = useNavigate();

  const goToGallery = () => {
    navigate("/Gallery");
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  return (
    <section id="photos">
      <h2 className="photosTitle">Photography</h2>
      <span className="photosDesc">
        I love taking pictures of animals in the wild. Through my photos, I hope
        to show people the beauty of nature and help them care more about the
        natural world.
      </span>
      <div className="photoCatgs">
        {windowWidth >= 1180 && (
          <button
            className="btnBig btnCar left"
            onClick={() => handleRotate(-1)}
            aria-label="Rotate left"
          >
            &lt;
          </button>
        )}
        <div
          className="carousel-container"
          style={{ transform: `rotateY(${rotation}deg)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {photos.map((photo, index) => {
            const cardRotation = index * angleStep;
            const scale = index === frontCardIndex ? 1.15 : 1;
            return (
              <div
                key={index}
                className="card"
                style={{
                  transform: `rotateY(${cardRotation}deg) translateZ(${carouselRadius}) scale(${scale})`,
                }}
              >
                <CanvasImage
                  src={photo}
                  className="photoCatg"
                  onContextMenu={handleRightClick}
                />
              </div>
            );
          })}
        </div>
        {windowWidth >= 1180 && (
          <button
            className="btnBig btnCar right"
            onClick={() => handleRotate(1)}
            aria-label="Rotate right"
          >
            &gt;
          </button>
        )}
      </div>
      {windowWidth < 1180 && (
        <div className="controls">
          <button
            className="btnSmall btnCar left"
            onClick={() => handleRotate(-1)}
            aria-label="Rotate left"
          >
            &lt;
          </button>
          <button
            className="btnSmall btnCar right"
            onClick={() => handleRotate(1)}
            aria-label="Rotate right"
          >
            &gt;
          </button>
        </div>
      )}
      <button className="btnMore" onClick={goToGallery}>
        See more
      </button>
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
    </section>
  );
};

export default Photos;
