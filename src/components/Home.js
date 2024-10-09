import React from "react";
import "./css/Home.css";
import holly from "./data";
import { Link } from "react-router-dom";

function Home() {
  const issy = holly;
  const leah = holly;
  const collections = [holly, issy, leah];

  return (
    <div className="collectionsContainer">
      <div id = "collectionHolly" className="collection">
        <h1 className="collectionTextRight graffiti">holly</h1>
        <div className="collectionImageContainer">
          <img className="collectionImage" src={holly[0].imgSrc} alt={holly[0].title} />
        </div>
      </div>

      <div id = "collectionIssy" className="collection">
        <h1 className="graffiti">issy</h1>
        <div className="collectionImageContainer">
          <img className="collectionImage" src={issy[1].imgSrc} alt={issy[1].title} />
        </div>
      </div>

      <div id = "collectionLeah" className="collection">
        <h1 className="collectionTextRight graffiti">leah</h1>
        <div className="collectionImageContainer">
          <img className="collectionImage" src={leah[3].imgSrc} alt={leah[3].title} />
        </div>
      </div>
    </div>
    //   {collections.map((collection) => (
    //     <div key={art.id} className="gallery-item">
    //       <Link to={`/artwork/${art.id}`}>
    //         <img src={art.imgSrc} alt={art.title} className="gallery-image" />
    //         <h3>{art.title}</h3>
    //         <p>{getPriceRange(art.prices)}</p>
    //       </Link>
    //     </div>
    //   ))}
    // </div>
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
