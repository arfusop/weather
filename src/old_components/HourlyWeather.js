import React from "react";

const HourlyWeather = ({ hourly }) => {
	return (
		<div>
			--- HOURLY ---
			<div>{hourly.summary}</div>
		</div>
	);
};

export default HourlyWeather;
