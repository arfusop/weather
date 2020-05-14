/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { withTheme } from "emotion-theming";
import {
	determineWeatherIcon,
	determineTempColor
} from "../utils/utilities.js";
import { format, addDays } from "date-fns";
import Bit from "./styled/Bit";

const DailyWeather = ({ currentTemp, daily }) => {
	return (
		<React.Fragment>
			<div
				className="dailySummary"
				css={{ borderBottom: `1px solid ${determineTempColor(currentTemp)}` }}
			>
				<div>{daily.summary}</div>
			</div>
			<div className="dailyRecap">
				{daily.data.map((day, index) => {
					const current = new Date();
					const newDate = addDays(current, index);

					return (
						<Bit
							key={Math.random()}
							style={{
								borderRight:
									index + 1 === daily.data.length
										? "none"
										: `1px solid ${determineTempColor(currentTemp)}`
							}}
						>
							<div className="dailyDate">{format(newDate, "ddd")}</div>
							<div key={Math.random()} className="dailyIconContainer">
								<i
									key={Math.random()}
									// css={{ color: determineTempColor((day.temperatureHigh + day.temperatureLow) / 2) }}
									css={{ color: determineTempColor(day.temperatureHigh) }}
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

export default withTheme(DailyWeather);