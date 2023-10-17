import "./footer.css";

const Footer = () => {
	return (
		<div className="Footer-wrapper">
			<div className="footer-top">
				<div className="footer-left">
					<div className="footer-logo">
						<span>logo</span>
					</div>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Voluptates, veritatis. Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Dolorum dolore doloribus explicabo libero error
						nihil fuga, ratione debitis tempora distinctio?
					</p>
				</div>
				<div className="footer-middle">
					<h3>Resources</h3>
					<ul>
						<li>
							<a href="">link</a>
						</li>
						<li>
							<a href="">link</a>
						</li>
						<li>
							<a href="">link</a>
						</li>
					</ul>
				</div>
				<div className="footer-right">
					<h3>Contact us</h3>
					<a href="">email</a>
				</div>
			</div>
			<div className="footer-bottom">© site 2023.. All Rights Reserved.</div>
		</div>
	);
};
export default Footer;
