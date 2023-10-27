import "./signin.css";
import logo from "../../assets/logo.png";
const SignIn = () => {
	return (
		<div className="signUpContainer">
			<div>
				<img className="signlogo" src={logo} alt="" />
			</div>
			<div className="signUpWrapper">
				<h1>Sign In</h1>
				<div className="form">
					<form action="">
						<div>
							<input type="text" placeholder="Username" />
						</div>
						<div>
							<input type="password" placeholder="password" />
						</div>
						<button className="btn">Sign In</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default SignIn;
