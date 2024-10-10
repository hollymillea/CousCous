import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { collectionsData } from "../data/data";

function Home() {
  const holly = collectionsData[0];
  const issy = holly;
  const leah = holly;
  const collections = [holly, issy, leah];

  return (
    <div className="collectionsContainer">
      {/* Holly Collection */}
      <Link to="/collections/holly">
        <div id="collectionHolly" className="collection">
          <h1 className="collectionTextRight graffiti">holly</h1>
          <div className="collectionImageContainer">
            <img className="collectionImage" src={holly[0].imgSrc} alt={holly[0].title} />
          </div>
        </div>
      </Link>

      {/* Issy Collection */}
      <Link to="/collections/issy">
        <div id="collectionIssy" className="collection">
          <h1 className="graffiti">issy</h1>
          <div className="collectionImageContainer">
            <img className="collectionImage" src={issy[1].imgSrc} alt={issy[1].title} />
          </div>
        </div>
      </Link>

      {/* Leah Collection */}
      <Link to="/collections/leah">
        <div id="collectionLeah" className="collection">
          <h1 className="collectionTextRight graffiti">leah</h1>
          <div className="collectionImageContainer">
            <img className="collectionImage" src={leah[3].imgSrc} alt={leah[3].title} />
          </div>
        </div>
      </Link>
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

  return `£${minPrice} - £${maxPrice}`;
};

export default Home;
