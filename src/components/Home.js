import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 1000); // Change visibility every 2 seconds (2000 ms)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="home">
      <h1
        id="ComingSoon"
        className={`fade-text ${
          visible ? "fade-in" : "fade-out"
        } sixtyfour-convergence-couscous`}
      >
        COMING SOON...
      </h1>
    </div>
  );
}

export default Home;
