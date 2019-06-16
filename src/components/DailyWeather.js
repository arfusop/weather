import React from "react";
import { determineWeatherIcon } from "../utils/utilities.js";
import { format, addDays } from "date-fns";
import Bit from "./styled/Bit";

const DailyWeather = ({ daily }) => {
	return (
		<React.Fragment>
			<div className="dailySummary">
				<div>{daily.summary}</div>
			</div>
			<div className="dailyRecap">
				{daily.data.map((day, index) => {
					const current = new Date();
					const newDate = addDays(current, index === 0 ? index : index + 1);
					return (
						<Bit
							key={Math.random()}
							style={{
								borderRight:
									index + 1 === daily.data.length ? "none" : "1px solid black"
							}}
						>
							<div className="dailyDate">{format(newDate, "ddd")}</div>
							<div key={Math.random()} className="dailyIconContainer">
								<i
									key={Math.random()}
									className={`wi ${determineWeatherIcon(day.icon)} dailyIcon`}
								/>
							</div>
							<div className="dailyTemp">
								{Math.round(day.temperatureHigh)} |{" "}
								{Math.round(day.temperatureLow)}
							</div>
						</Bit>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default DailyWeather;
