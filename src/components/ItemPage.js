import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemPage.css";
import holly from "./data";
import PayPalButton from "./Paypal";
// import Paypal from "./Paypal2";

function ItemPage() {
  const { id } = useParams(); // Get artwork ID from URL
  const [selectedSize, setSelectedSize] = useState("A4");

  // Simulated data for artwork details
  const artwork = holly[id - 1];

  return (
    <div className="container">
      <PayPalButton />
      {/* <Paypal /> */}
      <div className="container-left">
        <img
          src={artwork.imgSrc}
          alt={artwork.title}
          className="artwork-image"
        />
        <h1>{artwork.title}</h1>

        <div className="artwork-price">
          <h3>Price:</h3>
          <p>{artwork.price[selectedSize]}</p>
        </div>
      </div>

      <div className="container-right">
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
      </div>
    </div>
  );
}

export default ItemPage;
