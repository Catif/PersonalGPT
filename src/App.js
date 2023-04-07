import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Home from "./components/Home/Home";

function App() {
	return (
		<React.StrictMode>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</React.StrictMode>
	);
}

export default App;
