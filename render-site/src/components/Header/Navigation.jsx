// import { useState } from "react";
// import "./navigation.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import "./navigation.css";

const Navigation = () => {
	const [navOpen, setNavOpen] = useState(false);

	const openNav = () => {
		setNavOpen(!navOpen);
	};

	return (
		<header>
			<div className="ham" onClick={openNav}>
				<i class="fa-solid fa-bars fa-2xl"></i>
			</div>
			<nav className="nav-wrapper">
				<div className="logo-wrapper">
					<Link to={"/"}>
						<img className="logo" src={logo} alt="logo" />
					</Link>
				</div>
				<div className="link-wrapper">
					<ul>
						<li>{/* <a href="#about">About</a> */}</li>
						<li>{/* <a href="#contact">Contact</a> */}</li>
						<li className="account">
							<Link to="/account">My account</Link>
						</li>
					</ul>
				</div>
			</nav>

			{/* Mobile navigation */}
			<nav
				className={
					navOpen ? "nav-wrapper-mobile " : "nav-wrapper-mobile navopen"
				}
			>
				<div className="logo-wrapper">
					<img className="mobile-logo" src={logo} alt="logo" />
				</div>
				<div className="link-wrapper">
					<ul>
						<li>{/* <a href="#about">About</a> */}</li>
						<li>{/* <Link to="#contact">Contact</Link> */}</li>
						<li className="account">
							<Link to="/account">My account</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
