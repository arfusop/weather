import React from "react";
import { determineWeatherIcon } from "../utils/utilities.js";

const CurrentWeather = () => {
	return (
		<div>
			<i className={`wi ${determineWeatherIcon("clear-night")}`} />
		</div>
	);
};

export default CurrentWeather;
