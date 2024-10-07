import React from "react";
import "./Home.css";
import Holly1 from "../images/Holly/surface10.png";
import Holly2 from "../images/Holly/surface15.png";
import Holly3 from "../images/Holly/surface18.png";
import Holly4 from "../images/Holly/surface20.png";

function Home() {
  const artworks = [
    { id: 1, title: "DROPS 03", price: "$155 USD", imgSrc: Holly1 },
    { id: 2, title: "TRIPO 119", price: "$345 USD", imgSrc: Holly2 },
    { id: 3, title: "LANDXCAPES 94", price: "$315 USD", imgSrc: Holly3 },
    { id: 4, title: "LANDXCAPES 95", price: "$315 USD", imgSrc: Holly4 },
    // Add more artworks as necessary
  ];

  return (
    <div className="gallery">
      {artworks.map((art) => (
        <div key={art.id} className="gallery-item">
          <img src={art.imgSrc} alt={art.title} className="gallery-image" />
          <h3>{art.title}</h3>
          <p>{art.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
