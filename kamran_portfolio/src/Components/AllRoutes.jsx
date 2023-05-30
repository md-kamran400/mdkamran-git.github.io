import React from "react";
import { Routes, Route } from "react-router-dom";
import  Home  from "../Pages/Home";
import  Contact  from "../Pages/Contact";
import  Projects  from "../Pages/Projects";
import  Skills  from "../Pages/Skills";
import  About  from "../Pages/About";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
