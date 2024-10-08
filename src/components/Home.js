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
            <p>{getPriceRange(art.prices)}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

const getPriceRange = (prices) => {
  const priceValues = Object.values(prices); // Extract the values from the object

  if (priceValues.length === 1) {
    return `£${priceValues[0]}`;
  }

  const minPrice = Math.min(...priceValues);
  const maxPrice = Math.max(...priceValues);

  return `£${minPrice} - £${maxPrice}`;
};

export default Home;
