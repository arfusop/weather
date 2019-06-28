import React from "react";

const Degrees = ({ value, unit, color }) => {
	return (
		<div className="degreesContainer">
			<div style={{ color }}>{Math.round(value)}</div>
			<div
				style={{
					fontSize: 10,
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gridGap: 2,
					alignContent: "center",
					color
				}}
			>
				<i style={{ fontSize: 6 }} className="far fa-circle" /> {unit}
			</div>
		</div>
	);
};

export default Degrees;
