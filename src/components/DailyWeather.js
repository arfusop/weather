import React from "react";
import { determineWeatherIcon } from "../utils/utilities.js";
import { format, addDays } from "date-fns";

const DailyWeather = ({ daily }) => {
	return (
		<div>
			--- DAILY ---
			<div className="summary">
				<i className={`wi ${determineWeatherIcon(daily.icon)}`} />
				<span>{daily.summary}</span>
			</div>
			<div className="dailyRecap">
				{daily.data.map((day, index) => {
					const current = new Date();
					const newDate = addDays(current, index + 1);
					return (
						<div key={Math.random()}>
							<div className="dailyDate">{format(newDate, 'dddd, MM/YYYY')}</div>
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
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DailyWeather;
