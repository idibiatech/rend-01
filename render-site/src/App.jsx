import { useState } from "react";
import Navigation from "./components/Header/Navigation";
import Hero from "./components/Hero/Hero";
import Section from "./components/sections/mainSection";
import Footer from "./components/Footer/Footer";
function App() {
	return (
		<>
			<Navigation />
			<Hero />
			<Section />
			<Footer />
		</>
	);
}

export default App;
