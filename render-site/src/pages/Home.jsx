import Navigation from "../components/Header/Navigation";
import Hero from "../components/Hero/Hero";
import Section from "../components/sections/mainSection";
import Footer from "../components/Footer/Footer";
import Subscribe from "../components/PopUp/Subscribe";
const Home = () => {
	return (
		<div>
			<Navigation />
			<Hero />
			<Section />
			<Footer />
			{/* <Subscribe /> */}
		</div>
	);
};
export default Home;
