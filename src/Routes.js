import React from "react";
import {Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact";
import { Home } from "./pages/Home";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      {/* <Route path="/">
        <Home />
      </Route> */}
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  )
}