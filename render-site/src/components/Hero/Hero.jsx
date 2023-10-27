import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
	return (
		<div className="hero-wrapper">
			<div className="hero-text">
				<h1>
					<span>Unleash </span>
					<span>Your Imagination</span>
				</h1>
				<h3>
					Discover the future of rendering with FT Rendering, where innovation
					meets artistry.
				</h3>

				<button className="btn">
					<Link to="/signup">Sign up</Link>
				</button>
			</div>
		</div>
	);
};
export default Hero;
