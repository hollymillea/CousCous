import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemPage.css";
import holly from "./data";

function ItemPage() {
  const { id } = useParams(); // Get artwork ID from URL
  const [selectedSize, setSelectedSize] = useState("A4");

  // Simulated data for artwork details
  const artwork = holly[id - 1];

  // useEffect to change PayPal container color after it's been rendered
  useEffect(() => {
    // Get the div we created for this and attach the PayPal button to it
    const paypalContainer = document.getElementById("paypal-container-YY37FCHVDARYS");
    if (paypalContainer) {
      window.paypal
        .HostedButtons({
          hostedButtonId: "YY37FCHVDARYS",
        })
        .render("#paypal-container-YY37FCHVDARYS");
    }
  }, []);

  return (
    <div className="container">
      <div id="paypal-container-YY37FCHVDARYS"></div>
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
