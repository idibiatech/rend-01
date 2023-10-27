import Navigation from "../Header/Navigation";
import "./account.css";
import Subscribe from "../PopUp/Subscribe";
import { useState } from "react";

const Account = () => {
	const [showPopup, setShowPopup] = useState(false);
	const handlePopUp = () => {
		setShowPopup(!showPopup);
	};
	return (
		<div className="account-wrapper">
			<div className="account-left">
				<ul>
					<li>
						<a href="">Log out</a>
					</li>
				</ul>
			</div>
			<div className="account-right">
				<h1> Hello user</h1>
				<p>
					From your account dashboard you can view your recent orders, manage
					your shipping and billing addresses, and edit your password and
					account details.
				</p>
				<div className="account-btn-wrapper">
					<div className="btn">
						<a onClick={handlePopUp}>Workspace</a>
					</div>
					<div className="btn">
						<a href="https://sioi26r6q9h.typeform.com/to/Mj4jIhqS">Dashboard</a>
					</div>
				</div>
			</div>
			<div className="alert">
				{showPopup && <Subscribe handlePopUp={handlePopUp} />}
			</div>
		</div>
	);
};
export default Account;
