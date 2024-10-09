import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Collection() {
  const { name } = useParams(); // Get artwork ID from URL

  return (
    <div className="container">
        {name}
    </div>
  );
}

export default Collection;
