import React from "react";
import {
	determineWeatherIcon,
	returnLocalDateTime
} from "../utils/utilities.js";
import { format } from "date-fns";
// import Card from "./styled/Card";
import Title from "./styled/Title";

const CurrentWeather = ({ currently, location, timezone, hourly }) => {
	return (
		<div className="currentWeatherContainer">
			<Title className="currentWeatherTitle">Currently</Title>
			<div className="currentWeatherTile">
				<div className="currentWeatherInfo">
					<div className="temp">
						<span>{Math.round(currently.temperature)} F</span>
					</div>
					<div className="otherInfo">
						<span>
							Precipitation: {Math.round(currently.precipProbability * 100)}%
						</span>
						<span>Humidity: {Math.round(currently.humidity * 100)}%</span>
						<span>Wind: {Math.round(currently.windGust)} mph</span>
					</div>
				</div>
				<div className="currentWeatherRemainingData">
					<div className="currentlyTop">
						<div
							style={{
								display: "grid",
								gridGap: 10,
								alignItems: "center",
								justifyContent: "center"
							}}
						>
							<div className="location">
								<span>{location}</span>
							</div>
							<div className="currentTime">
								<span>
									{format(
										returnLocalDateTime(new Date(), timezone),
										"MM/DD/YYYY hh:mm A"
									)}
								</span>
							</div>
						</div>
						<div className="currentWeatherIconContainer">
							<i className={`wi ${determineWeatherIcon(currently.icon)}`} />
						</div>
					</div>
					<div className="currentlyBottom">
						<div className="summary">
							<span>{hourly.summary}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
