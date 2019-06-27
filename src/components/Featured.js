import React from "react";
import Card from "./styled/Card";
import { format } from "date-fns";
import {
	determineWeatherIcon,
	returnLocalDateTime,
	determineTempColor
} from "../utils/utilities.js";
import WeatherIndicator from "./styled/WeatherIndicator";
import Title from "./styled/Title";
import Degrees from "./Degrees";

const Featured = featured => {
	return (
		<div className="featuredCitiesContainer">
			<Title>Featured</Title>
			<div className="featuredCities">
				{featured.featured.map(city => {
					const { apparentTemperature, temperature } = city.currently;
					const { temperatureHigh, temperatureLow } = city.daily.data[0];

					const borderColor = determineTempColor(Math.round(temperature));
					return (
						<Card
							padding="10px"
							height="220px"
							className="featuredCityCard"
							border={`2px solid ${borderColor}`}
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
										<Degrees value={temperature} unit="F" />
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
