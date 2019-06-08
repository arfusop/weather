import React from "react";
import {
	determineWeatherIcon,
	returnLocalDateTime
} from "../utils/utilities.js";
import { format } from "date-fns";
import Card from "./styled/Card";

const CurrentWeather = ({ currently, location, timezone }) => {
	return (
		<div className="currentWeatherContainer">
			<Card>
				<div className="location">
					<span>{location}</span>
				</div>
				<div className="currentTime">
					<span>
						{format(
							returnLocalDateTime(new Date(), timezone),
							"M/D/YYYY hh:mm A"
						)}
					</span>
				</div>
				<div className="summary">
					<span>{currently.summary}</span>
				</div>
				<div className="temp">
					<i className={`wi ${determineWeatherIcon("clear-night")}`} />
					<span>{currently.temperature} F</span>
				</div>
				<div className="otherInfo">
					<span>
						Precipitation: {Math.round(currently.precipProbability * 100)}%
					</span>
					<span>Humidity: {Math.round(currently.humidity * 100)}%</span>
					<span>Wind: {Math.round(currently.windGust)} mph</span>
				</div>
				<div className="hourly" />
			</Card>
		</div>
	);
};

export default CurrentWeather;
