import React, { useState, useEffect, useRef } from "react";
import "../AnimatedGalleryImage/animatedgal.css";

function AnimatedGalleryImage({ src, alt, loading, onContextMenu }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);

      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
      }
    };
  }, [src]);

  return (
    <>
      {!isLoaded && (
        <div className="center loader">
          {[...Array(11)].map((_, i) => (
            <div key={i} className="wave"></div>
          ))}
        </div>
      )}
      <canvas
        ref={canvasRef}
        onContextMenu={onContextMenu}
        style={{ display: isLoaded ? "block" : "none" }}
      />
    </>
  );
}

export default AnimatedGalleryImage;
