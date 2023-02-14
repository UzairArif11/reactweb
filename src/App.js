import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Service from "./Component/Service";
import NavBar from "./Component/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
const App = () => {
  return (
    <>
      <NavBar />
      <Routing />
    </>
  );
};

export default App;
