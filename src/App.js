import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
