import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/pages/components/Navbar";
import Home from "./components/pages/Home";
import ItemPage from "./components/pages/ItemPage";
import Footer from "./components/pages/components/Footer";
import Collection from "./components/pages/Collection";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/:name" element={<Collection />} />
        <Route path="/item/:name/:id" element={<ItemPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
