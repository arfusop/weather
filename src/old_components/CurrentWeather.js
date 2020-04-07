/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { withTheme } from "emotion-theming";
import {
	determineWeatherIcon,
	returnLocalDateTime,
	determineTempColor
} from "../utils/utilities.js";
import { format } from "date-fns";
import Degrees from "./Degrees";
import Title from "./styled/Title";

const CurrentWeather = ({ currently, location, timezone, hourly, theme }) => {
	const { cardBg, cardFont } = theme;
	const tempColor = determineTempColor(currently.temperature);
	return (
		<div className="currentWeatherContainer">
			<Title className="currentWeatherTitle">Currently</Title>
			<div
				className="currentWeatherTile"
				css={{
					backgroundColor: cardBg,
					color: cardFont,
					borderColor: tempColor
				}}
			>
				<div className="currentWeatherInfo">
					<div className="temp">
						<Degrees color={tempColor} value={currently.temperature} unit="F" />
						<div className="currentWeatherIconContainer">
							<i
								css={{ color: tempColor }}
								className={`wi ${determineWeatherIcon(currently.icon)}`}
							/>
						</div>
					</div>
					<div className="otherInfo">
						<div
							css={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<i
								css={{ color: tempColor, fontSize: 35, marginRight: 5 }}
								className={`wi wi-raindrops`}
							/>{" "}
							<span>{Math.round(currently.precipProbability * 100)}%</span>
						</div>
						<div
							css={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<i
								css={{ color: tempColor, fontSize: 24, marginRight: 5 }}
								className={`wi 
							wi-humidity`}
							/>{" "}
							<span>{Math.round(currently.humidity * 100)}%</span>
						</div>
						<div
							css={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							{" "}
							<i
								css={{ color: tempColor, fontSize: 24, marginRight: 5 }}
								className={`wi 
						wi-windy`}
							/>{" "}
							<span>{Math.round(currently.windGust)} mph</span>
						</div>
					</div>
				</div>
				<div className="currentWeatherRemainingData">
					<div
						style={{
							display: "grid",
							gridTemplateRows: "0.5fr 1fr",
							gridTemplateColumns: "1fr",
							justifyContent: "flex-start"
						}}
					>
						<div
							className="currentlyTop"
							css={{
								display: "flex",
								justifyContent: "center"
							}}
						>
							<div
								css={{
									display: "flex",
									justifyContent: "center"
								}}
							>
								<div css={{ padding: 5 }}>
									<i
										css={{ fontSize: 34, color: tempColor }}
										className="fas fa-map-pin"
									/>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										padding: 5
									}}
								>
									<div className="location">
										<span>{location}</span>
									</div>
									<div className="currentTime">
										<span>
											{format(
												returnLocalDateTime(new Date(), timezone),
												"MM/DD/YYYY hh:mm A"
											)}
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="currentlyBottom">
							<div className="summary">
								<span>{hourly.summary}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withTheme(CurrentWeather);
