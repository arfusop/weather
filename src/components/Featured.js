import React from "react";
import Card from "./styled/Card";
import { format, parse } from "date-fns";
import {
	determineWeatherIcon,
	returnLocalDateTime,
	determineTempColor
} from "../utils/utilities.js";
import WeatherIndicator from "./styled/WeatherIndicator";
import Title from "./styled/Title";
import Degrees from "./Degrees";

const Featured = ({ featured, handleClick }) => {
	return (
		<div className="featuredCitiesContainer">
			<Title>Featured</Title>
			<div className="featuredCities">
				{featured.map(city => {
					const { apparentTemperature, temperature } = city.currently;
					const { temperatureHigh, temperatureLow } = city.daily.data[0];

					const borderColor = determineTempColor(Math.round(temperature));
					const currentDate = parse(
						format(
							returnLocalDateTime(new Date(), city.timezone),
							"dddd, MM/YYYY"
						)
					);
					const currentTime = parse(
						format(returnLocalDateTime(new Date(), city.timezone), "h:mm a")
					);
					// console.log(currentDate);
					// console.log(currentTime);
					return (
						<Card
							padding="10px"
							height="220px"
							className="featuredCityCard"
							border={`2px solid ${borderColor}`}
							onClick={() => handleClick(city)}
						>
							<Title className="featuredTitle">{city.name}</Title>
							<div className="featuredContent">
								<div className="left">
									<div className="featuredIcon">
										<i
											style={{
												fontSize: "2.5rem",
												textAlign: "center",
												color: borderColor
											}}
											className={`wi ${determineWeatherIcon(
												city.currently.icon
											)}`}
										/>
									</div>
									<div>{city.currently.summary}</div>
									<div>
										{format(
											returnLocalDateTime(new Date(), city.timezone),
											"dddd, MM/YYYY"
										)}
										<br />{" "}
										{format(
											returnLocalDateTime(new Date(), city.timezone),
											"h:mm a"
										)}
									</div>
								</div>
								<WeatherIndicator borderColor={borderColor}>
									<div className="high_low">
										{Math.round(temperatureHigh)} | {Math.round(temperatureLow)}
									</div>
									<div className="currentTemp">
										<Degrees color={borderColor} value={temperature} unit="F" />
									</div>
									<div className="feelsLike">
										Feels like {Math.round(apparentTemperature)}
									</div>
								</WeatherIndicator>
							</div>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default Featured;
