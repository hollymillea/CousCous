import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Gallery />
      <About />
      <Shop />
      <Contact />
    </div>
  );
}

export default App;
