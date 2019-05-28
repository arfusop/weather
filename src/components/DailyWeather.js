import React from "react";
import { determineWeatherIcon } from "../utils/utilities.js";
import { format } from "date-fns";

const DailyWeather = ({ daily }) => {
	return (
		<div>
			<div className="summary">
				<i className={`wi ${determineWeatherIcon(daily.icon)}`} />
				<span>{daily.summary}</span>
			</div>
			<div className="dailyRecap">
				{daily.data.map(day => (
					<div className="day">
						<i className={`wi ${determineWeatherIcon(day.icon)}`} />
					</div>
				))}
			</div>
		</div>
	);
};

export default DailyWeather;
