import "./signup.css";
const SignUp = () => {
	return (
		<div className="signUpContainer">
			<div className="logo">logo</div>
			<div className="signUpWrapper">
				<h1>Sign Up</h1>
				<div className="form">
					<form action="">
						<div>
							<input type="text" placeholder="Username" />
						</div>
						<div>
							<input type="password" placeholder="password" />
						</div>
						<button className="btn">Sign Up</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default SignUp;
