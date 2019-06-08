import React from "react";
import { determineWeatherIcon } from "../utils/utilities.js";
import { format, addDays } from "date-fns";
import Bit from "./styled/Bit";

const DailyWeather = ({ daily }) => {
	return (
		<div>
			<div className="summary">
				<i className={`wi ${determineWeatherIcon(daily.icon)}`} />
				<span>{daily.summary}</span>
			</div>
			<div className="dailyRecap">
				{daily.data.map((day, index) => {
					console.log(day)
					const current = new Date();
					const newDate = addDays(current, index + 1);
					return (
						<Bit key={Math.random()}>
							<div className="dailyDate">
								{format(newDate, "dddd, MM/YYYY")}
							</div>
							<div key={Math.random()} className="dailyIconContainer">
								<i
									key={Math.random()}
									className={`wi ${determineWeatherIcon(day.icon)}`}
								/>
							</div>
							<div className="dailyTemp">{day.temperatureHigh} | {day.temperatureLow}</div>
						</Bit>
					);
				})}
			</div>
		</div>
	);
};

export default DailyWeather;
