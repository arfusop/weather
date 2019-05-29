export const determineWeatherIcon = label => {
	let icon;
	switch (label) {
		case "clear-day":
			icon = "wi-day-sunny";
			break;
		case "clear-night":
			icon = "wi-night-clear";
			break;
		case "rain":
			icon = "wi-rain";
			break;
		case "snow":
			icon = "wi-snow";
			break;
		case "sleet":
			icon = "wi-sleet";
			break;
		case "wind":
			icon = "wi-windy";
			break;
		case "fog":
			icon = "wi-fog";
			break;
		case "cloudy":
			icon = "wi-cloudy";
			break;
		case "partly-cloudy-day":
			icon = "wi-day-cloudy";
			break;
		case "partly-cloudy-night":
			icon = "wi-night-cloudy";
			break;
		default:
			icon = "wi-na";
			break;
	}

	return icon;
};

export const daysForecastArray = day => {
	// figure out how to calculate the other days of the upcoming week. should return an array of 8 day indexes, starting with the first one passed into this function
};
