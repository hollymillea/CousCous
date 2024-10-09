import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import holly from "./data"; // Assuming this is where your data is
import "./css/Collection.css";

function Collection() {
  const { name } = useParams(); // Get the collection name from URL params
  const [prints, setPrints] = useState([]);

  useEffect(() => {
    // Assuming 'holly' is your data source, and contains all collections
    if (name === "holly") {
      setPrints(holly);
    } else if (name === "issy") {
      setPrints(holly); // Replace with Issy's collection data
    } else if (name === "leah") {
      setPrints(holly); // Replace with Leah's collection data
    }
  }, [name]);

  return (
    <div className="collection-container">
      <h1 className="collection-title graffiti">{name} Collection</h1>

      {/* Grid for prints */}
      <div className="prints-grid">
        {prints.map((print, index) => (
          <div key={index} className="print-item">
            <img src={print.imgSrc} alt={print.title} className="print-image" />
            <h3 className="print-title">{print.title}</h3>
            <p className="print-price">£{print.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
