import "./privacy.css";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
const Privacy = () => {
	return (
		<div>
			<div className="content-wrapper">
				<h1>Privacy policy</h1>
				<span>
					<Link className="rhome" to={"/"}>
						return home
					</Link>
				</span>
				<div>
					<h2>Introduction</h2>
					<p>
						Welcome to FTRendering.com (hereinafter referred to as the ‘Site’),
						owned by , where technology meets innovation. We are identified in
						legal parlance as “the Company,” “we,” “us,” or “our,” and are
						steadfast in our commitment to safeguarding your privacy. Respecting
						and safeguarding the personal information of our customers
						(“Customer,” “you,” or “your”) is central to our operational ethos.
						This Privacy Policy (“Policy”) is instituted to elucidate the
						principles governing the collection, utilization, disclosure, and
						management of your personal data during your interaction with our
						digital platform and services. Our practices are meticulously
						crafted to adhere to the stringent guidelines stipulated by the
						Nigeria Data Protection Act, among other relevant legislations
						safeguarding personal data and privacy within the jurisdiction of
						the Nigeria.
					</p>
				</div>
				<div>
					<h2>Information Collection</h2>
					<h3>Personal Data:</h3>
					<p>
						The creation of a personal account on our platform necessitates the
						submission of detailed personal data including, but not limited to,
						your full name, a valid email address, a contact number, and a
						distinctive password that adheres to our security guidelines.
					</p>
					<p>
						Your interactions with our platform are chronicled to harvest
						technical data such as IP address, browser type, and log
						information. This automated data collection process aims to foster a
						secure and customized user experience, assisting in the
						troubleshooting of potential issues and the enhancement of platform
						functionalities.
					</p>
					<h3>Transaction Data:</h3>
					<p>
						The platform maintains a meticulous log of transaction data,
						encompassing details of services availed and payment methods
						utilized. This initiative serves to streamline operational
						processes, maintain accurate records for future references, and
						foster a transparent transaction environment.
					</p>
				</div>
				<div>
					<h2>Purpose of Data Collection</h2>
					<h3>
						Data collection initiatives are embarked upon to cater to a myriad
						of operational necessities, including:
					</h3>

					<ul>
						<li>
							Enhancing Customer Service: A cardinal objective is the continuous
							improvement of customer service standards, facilitating prompt and
							effective responses to your service requests and nurturing a
							platform environment that anticipates and meets your needs
							proficiently.
						</li>
						<li>
							Personalized User Experience: An acute understanding of customer
							interactions with our services and resources is imperative. Data
							collection aids in crafting a nuanced and personalized user
							experience, guiding the iterative development of our service
							offerings.
						</li>
						<li>
							Transaction Processing and Record Keeping: Maintaining a
							meticulous record of transactions is central to safeguarding the
							integrity of the transaction process and facilitating accurate
							historical documentation that may serve critical roles in dispute
							resolution or service improvements.
						</li>
						<li>
							Legal Compliance and Cooperation with Law Enforcement: Adherence
							to legal mandates and cooperation with law enforcement entities
							constitute a significant facet of our data collection endeavors.
							This encompasses initiatives to safeguard the rights, privacy, and
							safety of the Company and our stakeholders and to facilitate
							legally sanctioned investigations.
						</li>
					</ul>
				</div>
				<div>
					<h2>Sharing Personal Data for Legal Purposes</h2>
					<p>
						Our commitment to upholding legal standards may necessitate the
						disclosure of your personal data to governmental or regulatory
						entities as mandated by applicable law. This engagement seeks to
						protect the broader interests of the community, ensuring compliance
						with legal obligations, fostering global security, and adhering to
						international obligations.
					</p>
				</div>
				<div>
					<h2>Data Protection Measures</h2>
					<h3>Security Infrastructure</h3>
					<p>
						At the core of our data protection strategy is a robust
						infrastructure that embodies stringent data collection, storage, and
						processing practices. This infrastructure is complemented by
						state-of-the-art security measures designed to thwart unauthorized
						access, alteration, disclosure, or destruction of your personal
						data, thus upholding the sanctity of your information.
					</p>
					<h3>Employee Training</h3>
					<p>
						Our employees are indoctrinated in the principles governing data
						protection, undergoing regular training regimes that foster informed
						and responsible handling of personal data and strict adherence to
						the established security protocols.
					</p>
					<h3>Third-Party Service Providers</h3>
					<p>
						Our collaboration with third-party service providers is governed by
						contractual obligations that mandate the maintenance of
						confidentiality and security of the accessed data, thereby
						minimizing risks associated with data handling.
					</p>
				</div>
				<div>
					<h2> Personal Data of Children</h2>

					<p>
						We harbor a steadfast commitment to the protection of minors. Our
						platform is explicitly designed to deter utilization by individuals
						below the age of 18, and we refrain from knowingly collecting
						personal data from children under this age threshold. If such data
						collection occurs inadvertently, we institute prompt measures to
						expunge such data from our repositories.
					</p>
				</div>
				<div>
					<h2>Your Rights</h2>

					<p>
						In alignment with the Nigeria Data Protection Act, you are conferred
						several rights concerning the management and oversight of your
						personal data, which encompass:
					</p>
					<ul>
						<li>
							Right to Access: This right empowers you to request a detailed
							account of your personal data that is under our custody.
						</li>
						<li>
							Right to Rectification: This provision facilitates the correction
							of inaccurate or incomplete data, ensuring the reflection of
							accurate personal details in our database.
						</li>
						<li>
							Right to Erasure: You are granted the prerogative to request the
							deletion of your personal data under specific circumstances, in
							accordance with legal provisions.
						</li>
						<li>
							Right to Object: You are entitled to raise objections to the
							processing of your personal data in specified scenarios, allowing
							for greater control over your personal information.
						</li>
					</ul>
				</div>
				<div>
					<h2>Third-Party Websites</h2>
					<p>
						Our platform may host links to websites operated by third parties,
						which are governed by their respective privacy policies. We
						encourage a cautious approach in navigating these sites and a
						thorough review of their privacy stipulations as we are not liable
						for the data management practices adopted by them.
					</p>
				</div>
				<div>
					<h2>Changes to this Policy</h2>
					<p>
						The Company reserves the unilateral right to modify this Privacy
						Policy in response to changing operational dynamics or to comply
						with evolving legal or regulatory requirements. Subsequent versions
						of this policy will be conspicuously published on our platform,
						demarcated by the date of the most recent update.
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
export default Privacy;
