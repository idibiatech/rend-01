import "./Subscibe.css";
const Subscribe = (props) => {
	const { handlePopUp } = props;

	return (
		<div className="sub-container">
			<div className="sub-wrapper">
				<p>Please subscribe first</p>
				<div className="btn" onClick={handlePopUp}>
					Okay
				</div>
			</div>
		</div>
	);
};
export default Subscribe;
