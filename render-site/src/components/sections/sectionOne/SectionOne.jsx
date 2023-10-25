import "./sectionone.css";
import { useRef } from "react";
const SectionOne = () => {
	return (
		<div className="sectionOneWrapper">
			<div className="tagline-wrapper">
				<h2 id="about">About us</h2>
				<p>
					At FT Rendering, we are passionate about turning your creative visions
					into stunning visual realities. With a relentless commitment to
					excellence and the power of cloud-based rendering, we've made it our
					mission to empower architects, designers, and creators to bring their
					projects to life with unparalleled quality and efficiency.
				</p>
				<p>
					Our team of dedicated experts, along with cutting-edge technology,
					ensures that your rendering needs are met with precision and speed.
					We're not just a service provider; we're your creative partners, ready
					to elevate your projects to new heights.
				</p>
			</div>

			<div className="how-container">
				<h2>How it works</h2>
				<div className="how-wrapper">
					<div className="how-item">
						<div className="count">{/* <span>1</span> */}</div>
						<div className="how-content">
							<h3>Simplify Your Rendering Process</h3>
							<p>
								At FT Rendering, we've streamlined the rendering process to make
								it effortless for you. Follow these simple steps to experience
								hassle-free cloud rendering:
							</p>
						</div>
					</div>
					<div className="how-item">
						<div className="count">
							<span> 1</span>
						</div>
						<div className="how-content">
							<h3>Upload Your Project</h3>
							<p>
								Start by uploading your 3D models, animations, or architectural
								plans to our secure platform. Our system is compatible with a
								wide range of file formats, making it easy to get your project
								into our pipeline.
							</p>
						</div>
					</div>
					<div className="how-item">
						<div className="count">
							<span>2</span>
						</div>
						<div className="how-content">
							<h3>Configure Rendering Settings</h3>
							<p>
								Customize your rendering settings to suit your project's
								specific needs. You have control over resolution, lighting,
								textures, and more. Our intuitive interface ensures you get the
								results you envision.
							</p>
						</div>
					</div>
					<div className="how-item">
						<div className="count">
							<span>3</span>
						</div>
						<div className="how-content">
							<h3>Rendering in the Cloud</h3>
							<p>
								Once you're satisfied with your settings, sit back and relax
								while our powerful cloud-based rendering servers take over. Your
								project will be processed efficiently, utilizing the latest
								rendering technology.
							</p>
						</div>
					</div>
					<div className="how-item">
						<div className="count">
							<span>4</span>
						</div>
						<div className="how-content">
							<h3>Review and Download</h3>
							<p>
								When the rendering is complete, you'll receive a notification.
								Preview the results and make any necessary adjustments. Once
								you're happy with the outcome, you can easily download your
								high-quality renderings.
							</p>
						</div>
					</div>
					<div className="how-item">
						<div className="count">
							<span>5</span>
						</div>
						<div className="how-content">
							<h3>Collaborate and Share</h3>
							<p>
								Share your rendered projects with clients or team members
								effortlessly. Our platform offers collaborative features, making
								it simple to gather feedback and make revisions.
							</p>
						</div>
					</div>
					<div className="how-item">
						<div className="count">
							<span>6</span>
						</div>
						<div className="how-content">
							<h3>Get Creative</h3>
							<p>
								With the technical aspects handled by FT Rendering, you can
								focus on what you do best—being creative. Whether it's
								architecture, animation, or product design, let us take care of
								the rendering process.
							</p>
						</div>
					</div>
					<div className="how-item">
						<div className="count">
							<span>7</span>
						</div>
						<div className="how-content">
							<h3>Enjoy Efficiency and Quality</h3>
							<p>
								Experience the perfect blend of speed and quality in rendering.
								Our cloud-based solution ensures your projects are processed
								efficiently without compromising on the final output.
							</p>
						</div>
					</div>
					<div className="how-item">
						<div className="count">
							<span>8</span>
						</div>
						<div className="how-content">
							<h3> Monitor Progress</h3>
							<p>
								Track the progress of your rendering jobs in real-time. Our
								platform provides transparency, so you're always in the know
								about the status of your projects.
							</p>
						</div>
					</div>
				</div>
				<div className="how-bottom">
					<p>
						Ready to revolutionize your rendering process? Sign up for [Your
						Company] and discover how easy it is to create stunning
						visualizations with our cloud rendering services.
					</p>
				</div>
			</div>
		</div>
	);
};
export default SectionOne;
