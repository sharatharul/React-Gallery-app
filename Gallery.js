import React from "react";
import "./index.css";

const Gallery = ({ images }) => {
  return (
    <div className="gallery-container">
      {images.map((img) => (
        <div key={img.id} className="gallery-item">
          <img src={img.src} alt={img.title} />
          <p>{img.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

