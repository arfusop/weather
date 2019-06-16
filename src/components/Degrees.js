import React from "react";

const Degrees = ({ value, unit }) => {
	return (
		<div className="degreesContainer">
			<div>{Math.round(value)}</div>
			<div
				style={{
					fontSize: 10,
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gridGap: 2,
					alignContent: "center"
				}}
			>
				<i style={{ fontSize: 6 }} className="far fa-circle" /> {unit}
			</div>
		</div>
	);
};

export default Degrees;
