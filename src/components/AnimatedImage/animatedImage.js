import React, { useState } from "react";
import "./animatedImage.css";

function AnimatedImage({ src, alt, loading, className = "", onContextMenu }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={`fade-in ${loaded ? "loaded" : ""} ${className}`}
      onLoad={() => setLoaded(true)}
      onContextMenu={onContextMenu}
    />
  );
}

export default AnimatedImage;
