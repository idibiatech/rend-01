import "./privacy.css";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
const Cookie = () => {
	return (
		<div>
			<div className="content-wrapper">
				<h1>Cookie policy</h1>
				<span>
					<Link className="rhome" to={"/"}>
						return home
					</Link>
				</span>
				<div>
					<h2>Introduction</h2>
					<p>
						Welcome to FTrendering. Your privacy is of utmost importance to us.
						In our endeavor to be transparent and provide a seamless online
						experience, this Cookie Policy outlines what cookies are, their
						purpose, the various types we deploy, and guidance on managing them
						while navigating through our digital platform and services.
					</p>
				</div>
				<div>
					<h2>Information About Cookies</h2>

					<p>
						Cookies are small files of data that are stored on your device when
						you visit a website. These files are used to store information that
						allows websites to recognize and remember your preferences, making
						your next visit more user-friendly. Cookies play a pivotal role in
						enhancing the functionality and performance of websites, thus
						facilitating a smoother and more interactive user experience.
					</p>
				</div>
				<div>
					<h2>There are different categories of cookies, such as:</h2>

					<ul>
						<li>
							Session Cookies: Temporary cookies that expire once you close your
							browser.
						</li>
						<li>
							Persistent Cookies: These cookies remain on your device for a
							specified period or until they are manually deleted.
						</li>
						<li>
							Third-party Cookies: Cookies set by websites other than the one
							you are currently visiting, usually as a result of embedded
							content or scripts from other sites.
						</li>
					</ul>
				</div>
				<div>
					<h2>Cookies Used on the Platform</h2>

					<p>
						We utilize a variety of cookies on our platform to enhance user
						experience, and these may include:
					</p>
					<ul>
						<li>
							Functional Cookies: Enable the platform to provide enhanced
							functionality and personalization.
						</li>
						<li>
							Analytical Cookies: Help us understand how visitors interact with
							the website by collecting and reporting information anonymously.
						</li>
						<li>
							Marketing Cookies: Used to track visitors across websites with the
							intention of displaying ads that are relevant and engaging for the
							individual user.
						</li>
						<li>
							Preference Cookies: Remember information that changes the way the
							website behaves or looks, such as your preferred language or the
							region you are in.
						</li>
					</ul>
				</div>
				<div>
					<h2>Managing Cookies</h2>

					<p>
						You have the right to either accept or reject cookies. Most web
						browsers automatically accept cookies, but you can usually modify
						your browser settings to decline cookies if you prefer. This,
						however, may prevent you from taking full advantage of the website.
						Visit the “Help” section of your browser to learn how to manage your
						cookie settings, or follow the links below for the respective
						browsers:
					</p>

					<ul>
						<li>
							Chrome:
							<a href="https://support.google.com/chrome/answer/95647">
								https://support.google.com/chrome/answer/95647
							</a>
						</li>
						<li>
							Firefox:{" "}
							<a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">
								https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
							</a>
						</li>
					</ul>
					<p>
						By continuing to use our platform, you consent to the deployment of
						cookies as described in this policy. If you do not wish to accept
						cookies from our website, please either disable them or refrain from
						using our website.
					</p>
				</div>
				<div>
					<h2> Changes to this Cookie Policy</h2>

					<p>
						We reserve the right to amend this Cookie Policy at any time to
						reflect changes in the law, our data collection and use practices,
						or the features of our services. We will make the revised policy
						accessible on this page, so you are encouraged to review it
						periodically.
					</p>
				</div>

				<div>
					<h2>Contact Us</h2>
					<p>
						For further information or to address any queries, concerns, or
						clarifications pertaining to this Policy, please reach out to us at
						our official email address: hello@FTRendering.com.
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Cookie;
