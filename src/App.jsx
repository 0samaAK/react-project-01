import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Villas from "./Components/Villas";
import Villa from "./Components/Villa";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/villas" element={<Villas />} />
          <Route path="/villa/:id" element={<Villa />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
