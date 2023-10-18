import "./sectiontwo.css";
const SectionTwo = () => {
	return (
		<div className="sectionTwoWrapper">
			<div className="pricing-intro">
				<h2>Pricing That Fits Your Needs</h2>
				<p>
					Our pricing is designed to be flexible and tailored to your specific
					requirements. Here's a general price range to give you an idea of what
					to expect:
				</p>
			</div>
			<div className="features-wrapper">
				<div className="feature  odd">
					<h3>image</h3>
					<p></p>
				</div>
				<div className="feature ">
					<h3>Free Plan</h3>
					<p>
						$0/mo - Ideal for small projects and occasional rendering needs.
					</p>
				</div>
				<div className="feature odd ">
					<h3>image</h3>
					<p></p>
				</div>
				<div className="feature ">
					<h3>Basic Plan</h3>
					<p>
						$XX - $XX/mo - Perfect for freelancers and small studios with
						regular rendering
					</p>
				</div>
				<div className="feature  ">
					<h3>Professional Plan</h3>
					<p>
						$XXX - $XXX/mo - Ideal for medium to large studios with frequent
						rendering requirements.
					</p>
				</div>
				<div className="feature  odd ">
					<h3>image</h3>
					<p></p>
				</div>
				<div className="feature   ">
					<h3>Enterprise Plan</h3>
					<p>
						Custom - Tailored for large enterprises with complex and high-volume
						rendering demands.
					</p>
				</div>
			</div>
		</div>
	);
};
export default SectionTwo;
