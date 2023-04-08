import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Home from "./components/Home/Home";
import Presets from "./components/Presets/Presets";
import { Provider } from "react-redux";
import { store } from "./store/redux";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presets" element={<Presets />} />
      </Routes>
    </Provider>
  );
}

export default App;
