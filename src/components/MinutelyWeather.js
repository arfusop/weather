import React from "react";
import { determineWeatherIcon } from "../utils/utilities.js";
import { format } from "date-fns";

const MinutelyWeather = ({ minutely }) => {
	return (
		<div>
			--- minutely ---
			<div className="summary">
				<i className={`wi ${determineWeatherIcon(minutely.icon)}`} />
				<span>{minutely.summary}</span>
			</div>
			<hr />
			<div className="minutelyRecap">
				{minutely.data.map(day => (
					<div key={Math.random()}>
						<div key={Math.random()} className="day">
							<i
								key={Math.random()}
								className={`wi ${determineWeatherIcon(day.icon)}`}
							/>
							<div key={Math.random()}>
								High:
								{day.temperatureHigh}
							</div>
							<div key={Math.random()}>
								Low:
								{day.temperatureLow}
							</div>
							<div key={Math.random()}>{day.summary}</div>
						</div>
						<hr />
					</div>
				))}
			</div>
		</div>
	);
};

export default MinutelyWeather;
