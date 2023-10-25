import "./footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="Footer-wrapper">
			<div className="footer-top">
				<div className="footer-left">
					<Link to={"/"} className="footer-logo">
						<img className="logo" src={logo} alt="" />
					</Link>

					<fiv className="content">
						<p>
							Discover the future of rendering with FT Rendering, where
							innovation meets artistry.
						</p>
					</fiv>
				</div>
				<div className="footer-middle">
					<h3>Resources</h3>
					<div className="content">
						<ul>
							<li>
								<Link to="/terms">Terms and conditions</Link>
							</li>
							<li>
								<Link to="/privacy">Privacy policy</Link>
							</li>
							<li>
								<Link to="/cookies">Cookie policy</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-right">
					<h3>Contact us</h3>

					<div className="content">
						<a className="email" href="mailto:hello@ftrendering.com">
							Hello@ftrendering.com
						</a>
						<p>
							Enigmawave Solutions Ltd 25 Bankole St, Pedro 102216, Lagos,
							Nigeria
						</p>
					</div>
				</div>
				<div className="footer-right">
					<h3>Payment</h3>

					<div className="content">
						<ul className="pay-ul">
							<li>
								<i class="fa-brands fa-cc-mastercard fa-xl"></i>
							</li>
							<li>
								<i class="fa-brands fa-cc-visa fa-xl"></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				© FT Rendering 2023.. All Rights Reserved.
			</div>
		</div>
	);
};
export default Footer;
