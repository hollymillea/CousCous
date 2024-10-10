import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collectionsData } from "../data/data"; // Assuming this is your data source
import '../css/Collection.css'; // Include your CSS styles


function Collection() {
  const { name } = useParams(); // Get the collection name from the URL

  // Which collection are we looking at?
  // const [prints, setPrints] = useState([]);
  const [selectedTab, setSelectedTab] = useState(name);

  let collection = collectionsData.find((collection) => collection.name === name);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    collection = collectionsData.find((collection) => collection.name === tab);
  };

  return (
    <div className="collection-page">
      <div className="tabs-container">
        {/* ALL tab */}
        <Link to="/collections/all" key="collectionAll">
          <div className={`tab ${selectedTab === "all" ? "active" : ""}`} onClick={() => handleTabClick("all")}>
              all 
          </div>
        </Link>

        {/* Tabs for each collection */}
        {collectionsData.map((collection, index) => {
          return (
            <Link to={`/collections/${collection.name}`} key={collection.name}>
              <div
                key={index}
                className={`tab ${selectedTab === collection.name ? "active" : ""}`}
                onClick={() => handleTabClick(collection.name)}
              >
                {collection.name}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Grid for prints */}
      <div className="prints-grid">
        {collection.items.map((print, index) => (
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
