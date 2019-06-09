import React from "react";
import { determineWeatherIcon } from "../utils/utilities.js";
import { format, addDays } from "date-fns";
import Bit from "./styled/Bit";

const DailyWeather = ({ daily }) => {
	return (
		<React.Fragment>
			<div className="dailySummary">
				<div className="iconSummary">
					<i className={`wi ${determineWeatherIcon(daily.icon)}`} />
				</div>
				<div>{daily.summary}</div>
			</div>
			<div className="dailyRecap">
				{daily.data.map((day, index) => {
					const current = new Date();
					const newDate = addDays(current, index + 1);
					return (
						<Bit
							key={Math.random()}
							style={{
								borderRight:
									index + 1 === daily.data.length ? "none" : "1px solid black"
							}}
						>
							<div className="dailyDate">
								{format(newDate, "dddd, MM/YYYY")}
							</div>
							<div key={Math.random()} className="dailyIconContainer">
								<i
									key={Math.random()}
									className={`wi ${determineWeatherIcon(day.icon)}`}
								/>
							</div>
							<div className="dailyTemp">
								{day.temperatureHigh} | {day.temperatureLow}
							</div>
						</Bit>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default DailyWeather;
