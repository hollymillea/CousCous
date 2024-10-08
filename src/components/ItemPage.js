import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemPage.css";

function ItemPage() {
  const { id } = useParams(); // Get artwork ID from URL
  const [selectedSize, setSelectedSize] = useState("A4");

  // Simulated data for artwork details
  const artwork = {
    id,
    title: "DROPS 03",
    price: { A4: "$155 USD", A3: "$185 USD" },
    imgSrc: "/path-to-image-1.jpg",
  };

  const handleAddToBasket = () => {
    alert(`Added ${artwork.title} (${selectedSize}) to basket!`);
  };

  return (
    <div className="artwork-detail">
      <img src={artwork.imgSrc} alt={artwork.title} className="artwork-image" />
      <h1>{artwork.title}</h1>

      <div className="artwork-price">
        <h3>Price:</h3>
        <p>{artwork.price[selectedSize]}</p>
      </div>

      <div className="size-selector">
        <h3>Select Size:</h3>
        <label>
          <input
            type="radio"
            name="size"
            value="A4"
            checked={selectedSize === "A4"}
            onChange={() => setSelectedSize("A4")}
          />
          A4
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value="A3"
            checked={selectedSize === "A3"}
            onChange={() => setSelectedSize("A3")}
          />
          A3
        </label>
      </div>

      <button className="add-to-basket" onClick={handleAddToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default ItemPage;
