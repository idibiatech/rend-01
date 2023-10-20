import { useState } from "react";
import Navigation from "./components/Header/Navigation";
import Hero from "./components/Hero/Hero";
import Section from "./components/sections/mainSection";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default App;
