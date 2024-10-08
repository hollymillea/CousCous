import React from "react";
import "./Home.css";
import holly from "./data";
import { Link } from "react-router-dom";

function Home() {
  const artworks = holly;

  return (
    <div className="gallery">
      {artworks.map((art) => (
        <div key={art.id} className="gallery-item">
          <Link to={`/artwork/${art.id}`}>
            <img src={art.imgSrc} alt={art.title} className="gallery-image" />
            <h3>{art.title}</h3>
            <p>£{art.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
