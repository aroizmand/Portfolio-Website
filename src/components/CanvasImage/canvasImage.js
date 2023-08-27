import React, { useState, useEffect } from "react";
import "../AnimatedImage/animatedImage.css"; // Import the same CSS for consistency

const CanvasImage = ({ src, alt, className = "", onContextMenu }) => {
  const [loaded, setLoaded] = useState(false);
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = src;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      setLoaded(true); // Set to loaded after drawing
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className={`fade-in ${loaded ? "loaded" : ""} ${className}`}
      onContextMenu={onContextMenu}
      title={alt}
    />
  );
};

export default CanvasImage;
