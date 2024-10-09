import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Gallery from "./components/Gallery";
// import About from "./components/About";
// import Shop from "./components/Shop";
// import Contact from "./components/Contact";
import ItemPage from "./components/ItemPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artwork/:id" element={<ItemPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
