import React from "react";
import {Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  )
}