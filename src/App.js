import React from "react";
import { Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import Home from "./components/Home/Home";
import Settings from "./components/Settings/Settings";

import Presets from "./components/Presets/Presets";
import PresetsCreate from "./components/PresetsCreate/PresetsCreate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presets" element={<Presets />}>
          <Route path="create" element={<PresetsCreate />} />
          <Route path=":presetId" element={<Presets />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
