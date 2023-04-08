import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Home from "./components/Home/Home";
import Presets from "./components/Presets/Presets";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presets" element={<Presets />} />
    </Routes>
  );
}

export default App;
