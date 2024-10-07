import React from "react";

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        <img src="print1.jpg" alt="Art Print 1" />
        <img src="print2.jpg" alt="Art Print 2" />
        {/* Add more images as needed */}
      </div>
    </section>
  );
}

export default Gallery;
