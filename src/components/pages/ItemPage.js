import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/ItemPage.css";
import { collectionsData } from "../data/data";

function ItemPage() {
  const { name, id } = useParams(); // Get artwork ID from URL

  const [selectedSize, setSelectedSize] = useState("A4");

  // Get the right collection
  const collection = collectionsData.find(
    (collection) => collection.name === name
  );
  // Get the right item
  const item = collection.items[0];
  console.log(item);

  // useEffect to change PayPal container color after it's been rendered
  useEffect(() => {
    const paypalContainer = document.getElementById(
      `paypal-container-${item.paypalID}`
    );

    if (paypalContainer) {
      window.paypal
        .HostedButtons({
          hostedButtonId: item.paypalID,
        })
        .render(`#paypal-container-${item.paypalID}`)
        .then(() => {
          // Call the function after the PayPal button has rendered
          setWidthOfPaypal(item.paypalID);
        });
    }
  }, [item.paypalID]);

  return (
    <div className="container">
      <div className="container-left">
        <img src={item.imgSrc} alt={item.title} className="artwork-image" />
        <h1>{item.title}</h1>

        <div className="artwork-price">
          <h3>Price:</h3>
          <p>£{item.prices[selectedSize]}</p>
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

        <div id={`paypal-container-${item.paypalID}`}></div>
      </div>
    </div>
  );
}

const setWidthOfPaypal = (id) => {
  id = "paypal-form-fields-container-" + id;
  const div = document.getElementById(id);
  div.style.width = "100px";
};

export default ItemPage;
