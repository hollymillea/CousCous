import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { collectionsData } from "../data/data";

function Home() {
  return (
    <div className="collectionsContainer">

      {/* For each collection */}
      {collectionsData.map((collection, index) => {

        const name = collection.name;
        const imgSrc = collection.collectionImg;

        // Flush the text to the right on odd rows
        const oddRow = index % 2 === 0;
        const leftOrRightClass = oddRow ? "collectionTextRight" : null;

        // Create the collection component
        return (
          <Link to={`/collections/${name}`} key={index}>
            <div id={`collection${name}`} className="collection">
              <h1 className={`graffiti ${leftOrRightClass}`}>{name}</h1>
              <div className="collectionImageContainer">
                <img className="collectionImage" src={imgSrc} alt={name} />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Home;
