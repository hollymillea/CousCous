import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { collectionsData } from "../data/data"; // Assuming this is your data source
import '../css/Collection.css'; // Include your CSS styles


function Collection() {
  const { name } = useParams(); // Get the collection name from the URL

  // Which collection are we looking at?
  const [selectedTab, setSelectedTab] = useState(name);

  let collections = [];

  if (name === "all") {
    collections = collectionsData;
  }
  // If not, a particular collection has been selected
  else {
    let collection = collectionsData.find((collection) => collection.name === name);
    collections = [collection];
  }

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
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
        {/* Go through each item in the collections we want to display */}
        {collections.map(collection => {
          return(
            collection.items.map((print, index) => {
              return(
              <Link to={`/item/${collection.name}/${index}`} key={`${collection.name}-${index}`}>
                <div key={index} className="print-item">
                  <img src={print.imgSrc} alt={print.title} className="print-image" />
                  <h3 className="print-title">{print.title}</h3>
                  <p className="print-price">{getPriceRange(print.prices)}</p>
                </div>
              </Link>
              )})
            )
        })}
      </div>
    </div>
  );
}

const getPriceRange = (prices) => {
  const priceValues = Object.values(prices);

  if (priceValues.length === 1) {
    return `£${priceValues[0]}`;
  }

  const minPrice = Math.min(...priceValues);
  const maxPrice = Math.max(...priceValues);

  return `£${minPrice}-£${maxPrice}`;
};

export default Collection;
