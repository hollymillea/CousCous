import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import holly from "../data/data"; // Assuming this is your data source
import '../css/Collection.css'; // Include your CSS styles

function Collection() {
  const { name } = useParams(); // Get the collection name from the URL

  // Which collection are we looking at?
  const [prints, setPrints] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");

  useEffect(() => {
    // Filter prints based on the selected tab
    if (selectedTab === "Holly") {
      setPrints(holly);
    } else if (selectedTab === "Issy") {
      setPrints(holly); // Replace with Issy's collection data
    } else if (selectedTab === "Leah") {
      setPrints(holly); // Replace with Leah's collection data
    } else {
      setPrints([...holly]); // Show all prints if 'All' is selected
    }
  }, [selectedTab]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="collection-page">
      <div className="tabs-container">
        {/* Tabs for each collection */}
        <div
          className={`tab ${selectedTab === "All" ? "active" : ""}`}
          onClick={() => handleTabClick("All")}
        >
          All
        </div>
        <div
          className={`tab ${selectedTab === "Holly" ? "active" : ""}`}
          onClick={() => handleTabClick("Holly")}
        >
          Holly
        </div>
        <div
          className={`tab ${selectedTab === "Issy" ? "active" : ""}`}
          onClick={() => handleTabClick("Issy")}
        >
          Issy
        </div>
        <div
          className={`tab ${selectedTab === "Leah" ? "active" : ""}`}
          onClick={() => handleTabClick("Leah")}
        >
          Leah
        </div>
      </div>

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
