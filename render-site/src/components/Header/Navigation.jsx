// import { useState } from "react";
// import "./navigation.css";

// const Navigation = () => {
// 	const [navOPen, setNavOpen] = useState(false);
// 	const ham = document.querySelector(".ham");
// 	const nav = document.querySelector("nav-wrapper-mobile");
// 	const openNav = () => {
// 		if (!navOPen) {
// 			setNavOpen(!navOPen);

// 			nav.classList.add("navopen");
// 		} else {

// 			setNavOpen(!navOPen);
// 			nav.classList.add("navopen");
// 		}
// 	};

// 	// const navAnim = gsap();

// 	return (
// 		<header>
// 			<nav className="nav-wrapper">
// 				<div className="logo-wrapper">Logo</div>
// 				<div className="link-wrapper">
// 					<ul>
// 						<li>
// 							<a href="#">link</a>
// 						</li>
// 						<li>
// 							<a href="#">link</a>
// 						</li>
// 						<li className="account">
// 							<a href="#">My account</a>
// 						</li>
// 					</ul>
// 				</div>
// 			</nav>

// 			{/* mobile navigation  */}
// 			<nav className="nav-wrapper-mobile">
// 				<div
// 					className="ham"
// 					onClick={() => {
// 						openNav;
// 					}}
// 				></div>
// 				<div className="logo-wrapper">Logo</div>
// 				<div className="link-wrapper">
// 					<ul>
// 						<li>
// 							<a href="#">link</a>
// 						</li>
// 						<li>
// 							<a href="#">link</a>
// 						</li>
// 						<li className="account">
// 							<a href="#">My account</a>
// 						</li>
// 					</ul>
// 				</div>
// 			</nav>
// 		</header>
// 	);
// };
// export default Navigation;

import React, { useState } from "react";
import "./navigation.css";

const Navigation = () => {
	const [navOpen, setNavOpen] = useState(false);

	const openNav = () => {
		setNavOpen(!navOpen);
	};

	return (
		<header>
			<div className="ham" onClick={openNav}></div>
			<nav className="nav-wrapper">
				<div className="logo-wrapper">Logo</div>
				<div className="link-wrapper">
					<ul>
						<li>
							<a href="#">link</a>
						</li>
						<li>
							<a href="#">link</a>
						</li>
						<li className="account">
							<a href="#">My account</a>
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
				<div className="logo-wrapper">Logo</div>
				<div className="link-wrapper">
					<ul>
						<li>
							<a href="#">link</a>
						</li>
						<li>
							<a href="#">link</a>
						</li>
						<li className="account">
							<a href="#">My account</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
