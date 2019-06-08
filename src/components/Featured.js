import React from "react";
import Card from "./styled/Card";
import { format } from "date-fns";
import {
	determineWeatherIcon,
	returnLocalDateTime
} from "../utils/utilities.js";
import WeatherIndicator from "./styled/WeatherIndicator";

const Featured = featured => {
	return (
		<div className="featuredCitiesContainer">
			<div className="featuredTitle">Featured</div>
			<div className="featuredCities">
				{featured.featured.map(city => {
					const { apparentTemperature, temperature } = city.currently;

					const { temperatureHigh, temperatureLow } = city.daily.data[0];
					return (
						<Card padding="10px" className="featuredCityCard">
							<div className="left">
								<div>{city.name}</div>
								<div className="featuredIcon">
									{city.currently.summary}
									<i
										style={{ fontSize: "1.5rem", textAlign: "center" }}
										className={`wi ${determineWeatherIcon(
											city.currently.icon
										)}`}
									/>
								</div>
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
							<WeatherIndicator>
								<div>
									{Math.round(temperatureHigh)} | {Math.round(temperatureLow)}
								</div>
								<div>{Math.round(temperature)}</div>
								<div>Feels like {apparentTemperature}</div>
							</WeatherIndicator>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default Featured;
