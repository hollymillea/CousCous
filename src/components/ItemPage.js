  import React, { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import "./css/ItemPage.css";
  import holly from "./data";

  function ItemPage() {
    const { id } = useParams(); // Get artwork ID from URL
    const [selectedSize, setSelectedSize] = useState("A4");

    // Simulated data for artwork details
    const artwork = holly[id - 1];

    // useEffect to change PayPal container color after it's been rendered
    useEffect(() => {
      // Get the div we created for this and attach the PayPal button to it
      const paypalContainer = document.getElementById(`paypal-container-${artwork.paypalID}`);
      if (paypalContainer) {
        window.paypal
          .HostedButtons({
            hostedButtonId: artwork.paypalID,  // Dynamically use paypalID from artwork object
          })
          .render(`#paypal-container-${artwork.paypalID}`);
      }
    }, [artwork.paypalID]);  // Add artwork.paypalID as a dependency

    return (
      <div className="container">
        <div className="container-left">
          <img
            src={artwork.imgSrc}
            alt={artwork.title}
            className="artwork-image"
          />
          <h1>{artwork.title}</h1>

          <div className="artwork-price">
            <h3>Price:</h3>
            <p>£{artwork.prices[selectedSize]}</p>
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

          <div id={`paypal-container-${artwork.paypalID}`}></div>
          
        </div>
      </div>
    );
  }

  export default ItemPage;
